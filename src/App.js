import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Chat from './Chat';
import { useUser } from 'reactfire';
import { Container } from "react-bootstrap"
import './App.css';
import { AuthProvider } from "./Auth";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//TODO: Add stats dashboard
function App() {
  const user = useUser();
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="App">
        {
          user &&
              <>
              <Router>
              <AuthProvider>
                <Switch>
                  <Route exact path = '/login' component ={Login} />
                   <Route exact path = '/signup' component ={Chat} />
                </Switch>
              </AuthProvider>
              </Router>
              </>
        }
        {
          !user &&
          <>
            <Signup />
            <Login />
          </>
        }
      </div>
      </Container>
  )

  
}

export default App;
