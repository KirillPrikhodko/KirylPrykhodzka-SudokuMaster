
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SudokuMasterPage from './pages/SudokuMasterPage';


function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SudokuMasterPage}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
