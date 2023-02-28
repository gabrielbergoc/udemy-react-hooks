import P from 'prop-types';
import logo from './logo.svg';
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';

const Button = React.memo(function Button({ fn }) {
  console.log('rendered button')
  return <button onClick={() => fn()}>+</button>;
});

Button.propTypes = {
  fn: P.func.isRequired,
};

const App = () => {
  console.log('rendered app')

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

  const incrementCounter = useCallback((n = 1) => setCounter((c) => c + n), []);

  const reverseClass = reverse ? 'reverse' : '';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" onClick={handleLogoClick} />
        <p>Clicked {counter} times</p>
        <Button fn={incrementCounter} />
      </header>
    </div>
  );
};

export default App;
