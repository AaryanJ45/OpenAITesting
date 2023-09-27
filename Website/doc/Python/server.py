from flask import Flask, jsonify, request
from flask_cors import CORS 
import openai
import os


app = Flask(__name__)

CORS(app)

API_KEY = "YOUR_API_KEY"

openai.api_key = API_KEY

@app.route('/ask', methods=['POST'])
def ask_openai():
    user_input = request.json.get('question')

    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_input}]
    )

    text = response.choices[0].message['content']
    
    return jsonify({'answer': text})

if __name__ == '__main__':
    app.run(debug=True, port=5000)