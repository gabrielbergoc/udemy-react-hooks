import P from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';

const Button = ({ fn }) => {
  return <button onClick={() => fn()}>+</button>;
};

Button.propTypes = {
  fn: P.func.isRequired,
};

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

  const incrementCounter = useCallback((n = 1) => setCounter((c) => c + n), []);

  const reverseClass = reverse ? 'reverse' : '';
  const btn = useMemo(() => <Button fn={incrementCounter} />, [incrementCounter]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" onClick={handleLogoClick} />
        <p>Clicked {counter} times</p>
        {btn}
      </header>
    </div>
  );
};

export default App;
