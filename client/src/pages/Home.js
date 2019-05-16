import React from "react";
import Header from '../components/Header';
import TexasCentral from '../components/TexasCentral';
import Numbers from '../components/Numbers';
import Players from '../components/Players';
import Projects from '../components/Projects'
import Problems from "../components/Problems";

function Home() {
    return (
        <div>
        <Header />
        <Players />
        <TexasCentral />
        <Numbers />
        <Projects />
        <Problems />
        </div>
    );
}

export default Home; 
