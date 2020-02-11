import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MiniDrawer from './Main';
import Chat from './Chat'
import Signin from './Signin'
import './App.css';


  const App = () => {
    return (
      <div className="App">
        <Router>
          <MiniDrawer />
        </Router>
        <Chat />
        </div>
    )
  } 

export default App;
