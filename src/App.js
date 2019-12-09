import React from 'react';
import './App.css';
import Main from './components/layout/Main';
import ButtonState from './context/button/ButtonState';

function App() {
  return (
    <ButtonState>
      <Main />
    </ButtonState>
  );
}

export default App;
