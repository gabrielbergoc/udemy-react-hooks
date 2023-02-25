import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => console.log('componentDidUpdate'));

  useEffect(() => {
    console.log('componentDidMount');

    // return cleaning function
    return () => console.log('componentWillUnmount');
  }, []);

  useEffect(() => console.log('dependency changed:', counter), [counter]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setReverse(!reverse);
    incrementCounter();
  };

  const incrementCounter = () => setCounter((c) => c + 1);
  const decrementCounter = () => setCounter((c) => c - 1);

  const reverseClass = reverse ? 'reverse' : '';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" onClick={handleLogoClick} />
        <p>Clicked {counter} times</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
