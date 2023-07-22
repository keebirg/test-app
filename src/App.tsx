import React from 'react';
import './App.css';
import {Button} from "./Button/Button";

function App() {
  return (
    <div className='App' >
       <Button iconId='bus' style={{backgroundColor: 'rgb(299, 169, 247)'}}/>
       <Button iconId='bike' style={{backgroundColor: 'rgb(299, 169, 247)'}}/>
    </div>
  );
}

export default App;