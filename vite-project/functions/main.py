from firebase_functions import https_fn
from firebase_admin import initialize_app, credentials
from openai import OpenAI
from google.cloud import secretmanager
from flask import Flask, request, jsonify
from flask_cors import CORS
import logging

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

def chat_with_gpt(messages):
    response = client.chat.completions.create(model="gpt-4o", messages=messages)
    return response.choices[0].message.content.strip()

@app.route('/', methods=['POST'])
def chatgpt_request():
    try:
        data = request.get_json()
        user_message = data.get('message')
        if not user_message:
            return jsonify({"error": "Missing 'message' field"}), 400

        messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_message}
        ]

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
