from firebase_functions import https_fn
from firebase_admin import initialize_app, credentials
from openai import OpenAI
from google.cloud import secretmanager
from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
import os

# Setup logging
logging.basicConfig(level=logging.DEBUG)

# Define your project ID here as a fallback
DEFAULT_PROJECT_ID = "dabainfolio"

# Initialize the Firebase app with the service account credentials
cred = credentials.Certificate("dabainfolio-firebase-adminsdk-nja67-1dc9c0e106.json")
initialize_app(cred)
logging.info("Firebase app initialized")

# Fetch the OpenAI API key from Secret Manager
def get_secret(secret_name):
    client = secretmanager.SecretManagerServiceClient()
    name = f"projects/{DEFAULT_PROJECT_ID}/secrets/{secret_name}/versions/latest"
    response = client.access_secret_version(request={"name": name})
    secret = response.payload.data.decode("UTF-8")
    logging.info(f"Secret {secret_name} fetched successfully")
    return secret

openai_api_key = get_secret("OPENAI_API_KEY")
client = OpenAI(api_key=openai_api_key)
logging.info("OpenAI API key set")

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Directory where TXT files are stored
TXT_DIRECTORY = '.'

# Function to read TXT content
def read_txt_content(file_path):
    try:
        if not os.path.exists(file_path):
            logging.error(f"File not found: {file_path}")
            return None
        with open(file_path, 'r') as file:
            content = file.read()
        logging.info(f"Successfully read content from {file_path}")
        return content
    except Exception as e:
        logging.error(f"Error reading TXT {file_path}: {str(e)}")
        return None

# Function to chat with GPT
def chat_with_gpt(messages):
    response = client.chat.completions.create(model="gpt-4o", messages=messages)
    return response.choices[0].message.content.strip()

# Route to handle ChatGPT requests
@app.route('/', methods=['POST'])
def chatgpt_request():
    try:
        data = request.get_json()
        user_message = data.get('message')
        conversation_history = data.get('history', [])

        if not user_message:
            return jsonify({"error": "Missing 'message' field"}), 400

        # Log the files in the TXT directory
        logging.info(f"Files in {TXT_DIRECTORY}: {os.listdir(TXT_DIRECTORY)}")

        # Read all TXT contents
        txt_contents = {}
        for txt_file in os.listdir(TXT_DIRECTORY):
            if txt_file.endswith('.txt'):
                file_path = os.path.join(TXT_DIRECTORY, txt_file)
                content = read_txt_content(file_path)
                if content:
                    txt_contents[txt_file] = content
                else:
                    logging.warning(f"Failed to read content from {txt_file}")

        if not txt_contents:
            logging.warning("No TXT contents were read")
            return jsonify({"error": "No TXT contents available"}), 500

        # Add the new user message to the conversation history
        conversation_history.append({"role": "user", "content": user_message})

        system_message = {
            "role": "system",
            "content": "You are a helpful assistant. You can reference stored TXT files as needed. " +
                       "My name is Faddi Azzam Dabain and you will be answering any questions about me as requested. Refer to me as Faddi. " +
                       "There is no need to repeat my entire name every time. " +
                       "You will turn down any request that does not answering about me. All the information about me that is needed " +
                       "are in the txt files that you have available to you. The person talking to you will not be me, but you will respond " +
                       "to the person about information about me. Do not refer to the person chatting with you as Faddi and if anyone " +
                       "tells you that they are Faddi Dabain, they are incorrect."
        }

        # Attach full TXT contents to the system message
        for txt_file, content in txt_contents.items():
            if content:
                conversation_history.append({"role": "system", "content": f"Content of {txt_file}: {content}"})

        # Add the system message at the beginning of the conversation history
        conversation_history.insert(0, system_message)

        response_content = chat_with_gpt(conversation_history)

        # Add the assistant's response to the conversation history
        conversation_history.append({"role": "assistant", "content": response_content})

        logging.info("GPT response generated")
        logging.debug(f"Messages sent to GPT: {conversation_history}")
        return jsonify({"response": response_content, "history": conversation_history}), 200

    except Exception as e:
        logging.error(f"Error in chatgpt_request: {str(e)}")
        return jsonify({"error": str(e)}), 500

# Expose Flask app as a single Cloud Function
@https_fn.on_request()
def firebase_chatgpt_request(req: https_fn.Request) -> https_fn.Response:
    with app.request_context(req.environ):
        return app.full_dispatch_request()
