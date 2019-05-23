import React from "react";
import TexasCentral from '../components/TexasCentral';
import Numbers from '../components/Numbers';
import Players from '../components/Players';
import Projects from '../components/Projects'
import Problems from "../components/Problems";
import Navbar from '../components/Navbar';
import Index from '../pages/Index';

const Home = props => {
    const { user, signOut } = props;
    if (!user) {
    return <Index />;
}
    return (
        <div>
        <Navbar />
        <button onClick={signOut}>Sign Out</button>
        <Players />
        <TexasCentral />
        <Numbers />
        <Projects />
        <Problems />
        </div>
    );
};

export default Home; 
