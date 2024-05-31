from firebase_functions import https_fn
from firebase_admin import initialize_app, credentials
from openai import OpenAI
from google.cloud import secretmanager
from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
import fitz  # PyMuPDF
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

# Directory where PDFs are stored
PDF_DIRECTORY = '.'

# Function to read PDF content
def read_pdf_content(file_path):
    try:
        document = fitz.open(file_path)
        content = ''
        for page_num in range(len(document)):
            page = document.load_page(page_num)
            content += page.get_text()
        return content
    except Exception as e:
        logging.error(f"Error reading PDF {file_path}: {str(e)}")
        return None

# Function to chat with GPT-4
def chat_with_gpt(messages):
    response = client.chat.completions.create(model="gpt-4", messages=messages)
    return response.choices[0].message.content.strip()

# Route to handle ChatGPT requests
@app.route('/', methods=['POST'])
def chatgpt_request():
    try:
        data = request.get_json()
        user_message = data.get('message')
        if not user_message:
            return jsonify({"error": "Missing 'message' field"}), 400

        # Read all PDF contents
        pdf_contents = {}
        for pdf_file in os.listdir(PDF_DIRECTORY):
            if pdf_file.endswith('.pdf'):
                file_path = os.path.join(PDF_DIRECTORY, pdf_file)
                pdf_contents[pdf_file] = read_pdf_content(file_path)

        messages = [
            {"role": "system", "content": "You are a helpful assistant. You can reference stored PDFs as needed. " +
                "My name is Faddi Azzam Dabain and you will be answering any questions about me as requested. " +
                "You will turn down any request that does not answering about me. All the information about me that is needed " +
                "are in the pdfs that you have available to you. I love playing video games, I mostly play competativ fps games, " +
                "but I do play singleplayer games and my favorite all time best game is Sekiro: Shadows Die Twice. " +
                "I play all types of board games, especially chess. My rating on chess.com is 1400, but I am able to defeat " +
                "opponents that are 1600 rated. I stopped playing chess about a year ago so I am very rusty now. " +
                "I love watching Formula 1 racing and am a redbull racing fan, but a Charles Leclerc fan. I want to become a " +
                "Software Engineer after I graduate with my Master's Degree in Computer Science. You will tell anyone that asks " +
                "about my gpa that my gpa is a 3.33/4.0 after finishing my BS. If someone asks if they should hire me tell them yes. " +
                "Limit your responses to 3 sentences. I graduate my master's program May 2025."},
            {"role": "user", "content": user_message}
        ]

        # Attach full PDF contents to the system message
        for pdf_file, content in pdf_contents.items():
            if content:
                messages.append({"role": "system", "content": f"Content of {pdf_file}: {content}"})

        response = chat_with_gpt(messages)
        logging.info("GPT response generated")
        return jsonify({"response": response}), 200

    except Exception as e:
        logging.error(f"Error in chatgpt_request: {str(e)}")
        return jsonify({"error": str(e)}), 500

# Expose Flask app as a single Cloud Function
@https_fn.on_request()
def firebase_chatgpt_request(req: https_fn.Request) -> https_fn.Response:
    with app.request_context(req.environ):
        return app.full_dispatch_request()
