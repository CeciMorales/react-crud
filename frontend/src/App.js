import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import TasksList from './components/TasksList'
import TaskDetail from './components/TaskDetail'


function App() {
  return (
    
    <BrowserRouter>
      <div className="container">
          <Switch>
            <Route exact path="/">
              <Header/>
              <TasksList/>
            </Route>
            <Route exact path="/:id">
              <Header/>
              <TaskDetail />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
      
    
  );
}

export default App;
