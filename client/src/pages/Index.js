import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import "../styles/SignIn.css";
import { Col, Row } from "../components/Grid";
import Home from "../pages/Home";
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
          return <Home user={user} signOut={signOut} />;
        }
    return (
    <div>
    <Header />
  <Row>
    <Col size="md-6">
    </Col>
    </Row>
    <div className="goal">
    <Row>
    <Col size="md-6 hands">
    <div>
       
     
    <i className="fas fa-american-sign-language-interpreting"></i>
    
    <p className="mission">The Mission</p>
        <p className="missionState">, business owners and elected officials from all across Texas who share our core belief of combating eminent domain for private use and our opposition to any tax-subsidized railway.</p>
      </div>
   
    </Col>
    </Row>
    </div>
    <div className="mission">
    <Row>
    <Col size="md-6">
    <span>
    <i class="fas fa-bullseye"></i>
    </span>
    </Col>
    <Col size="md-6 goals">
 
    <div>
        <p className="goal">The Goal</p>
        <p className="goalState">This site is intended to help individuals protect private property rights and prevent the wasteful use of taxpayer dollars or public subsidies for high-speed rail transportation. Our members include citizens, private property owners, business owners and elected officials from all across Texas who share our core belief of combating eminent domain for private use and our opposition to any tax-subsidized railway.</p>
      </div>
    </Col>
    </Row>
  </div>
  <div className="activities">
    <Row>
    <Col size="md-6 activities">
    <span>
    <i class="fas fa-fist-raised"></i>
    </span>
    </Col>
    <Col size="md-6">
      <div>
        <p className="activites">Activites</p>
        <p className="goalState">This site is intended to help individuals protect private property rights and prevent the wasteful use of taxpayer dollars or public subsidies for high-speed rail transportation. Our members include citizens, private property owners, business owners and elected officials from all across Texas who share our core belief of combating eminent domain for private use and our opposition to any tax-subsidized railway.</p>
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
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
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
