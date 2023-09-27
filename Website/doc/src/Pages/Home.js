import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';
import { SearchInput } from './HomeElements';

const Home = () => {

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");


  const askOpenAI = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/ask', { question: question });
      setAnswer(response.data.answer);
    } catch(error) {
      console.error("Error asking OpenAI", error);
    }
    setLoading(false);
  }
   return (
        <div>
          <SearchInput value={question} onChange={(e) => setQuestion(e.target.value)} /> 
            <button onClick={askOpenAI} disabled={loading}>
                {loading ? "Loading..." : "Ask OpenAI"}
            </button>
            <div> Answer: {answer} </div>
        </div>
   )
}

export default Home;