import React from "react";
import "../styles/TexasCentral.css";
import Player from "../images/Player.png";



function Players() {
return (
    <div>
        <div className="player">
            <img className="player" src={Player} alt='icon' />
        </div>
    </div>
    
    );
}
export default Players;