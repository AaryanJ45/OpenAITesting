from flask import Flask, jsonify, request
from flask_cors import CORS 
import openai
import os


app = Flask(__name__)

CORS(app)

API_KEY = "KEY"

openai.api_key = API_KEY

@app.route('/ask', methods=['POST'])
def ask_openai():
    user_input = request.json.get('question')

    response = openai.Completion.create(
        model = "gpt-3-turbo",
        messages = [{'role': 'user', 'content': user_input}]
    )

    text = response.choices[0].message['content']
    
    return jsonify({'answer': text})
