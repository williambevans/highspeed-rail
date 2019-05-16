
import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import CMAView from './pages/CMA'
import Messages from './pages/Messages';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;



  return (
    <Router>
      <div>
      <div className="App">
    <header className="App-header">
      {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
    </header>
  </div>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/cma" component={CMAView} />
          <Route exact path="/message" component={Messages} />
          <Route exact path="/chat" component={Messages} />
        </Switch>
      </div>
    </Router>
  );
}
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
