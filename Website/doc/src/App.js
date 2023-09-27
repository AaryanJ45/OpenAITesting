import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './Pages/Home';
import './Pages/styles.css';




function App() {

  return (
    <div className="gradientBackground">
      <Home />
    </div>
    
  );
}

export default App;
