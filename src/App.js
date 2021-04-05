import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom";
import {useStateValue} from './components/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="App">  
      <Router>
      {!user ? (
        <Login/>
      ): (
        <>
        <Header/>
      <div className="app__body">
        <Sidebar/>
        <Switch>
          <Route path="/room/:roomId">
            <Chat/>
          </Route>
          <Route path="/">
            <div className="app__welcome">
              <h1>Slack Clone <span >v1.0</span></h1>
              <p>Head over to a channel to start chatting.</p>
            </div>
          </Route>
        </Switch>
      </div>
      </>        
      ) }    
      </Router>
    </div>
  );
}

export default App;
