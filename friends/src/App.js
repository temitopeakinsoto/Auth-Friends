import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Container from './components/Container';
import './App.css';

function App(props) {
  return (
    <Router className="App">
      <Container />
    </Router>
  );
}

export default App;
