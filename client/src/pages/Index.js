import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import "../styles/SignIn.css";
import { Col, Row } from "../components/Grid";
import Search from "../pages/Search";
import Header from "../components/Header";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Index extends Component {
    render() {
        const {
          user,
          signOut,
          signInWithGoogle,
        } = this.props;
        if (user) {
          return <Search user={user} signOut={signOut} />;
        }
    return (
    <div>
    <Header />
   
    <div className="goal">
    <Row>
    <Col size="md-6 hands">
    <div>
    <i className="fas fa-american-sign-language-interpreting"></i>
    <p className="mission">The Mission</p>
        <p className="missionState">Educate business owners and home owners on the High-Speed Rail project by providing a means to combat Texas Central from undercutting property values in land acquisitions</p>
      </div>
    </Col>
    </Row>
    </div>
    <div className="mission">
    <Row>
    <Col size="md-6 goals">
    <div>
    <i class="fas fa-bullseye"></i>
        <p className="goal">The Goal</p>
        <p className="goalState">This site is intended to help individuals ensure they have the tools necessary to equip themselves with the facts and numbers needed to stand against Texas Central.</p>
      </div>
    </Col>
    </Row>
  </div>
  <div className="activities">
    <Row>
    <Col size="md-6 mission">
      <div>
      <i class="fas fa-fist-raised"></i>
        <p className="activites">Community</p>
        <p className="goalState">Stay connected and informed with other locals involved in land disputes and property values on the High Speed Chat terminal</p>
      </div>
    </Col>
    </Row>
  </div>
        <div className="App">
      <header className="sign-header">
        {
          user 
            ? <p>Hello, {user.displayName}</p>
            : <p></p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button className="signIn" onClick={signInWithGoogle}>Sign in with Google</button>
        }
        </header>
  </div>
  </div>
  
  
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
})(Index);
