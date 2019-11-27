import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Write cool code faster.
        </p>
        <p>
          Check out{' '}
          <a
            className="App-link"
            href="https://github.com/digital-taco/react-draft"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Draft
          </a>
        </p>
      </header>
      <footer className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
