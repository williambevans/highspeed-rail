import React from "react";
import "../styles/TexasCentral.css";
import alignmentMap from "../images/alignmentMap.png";



function TexasCentral() {
return (
    <div>
        <div className="cardMap">
            <img className="alignmentMap" src={alignmentMap} alt='icon' />
        </div>
    </div>
    );
}
export default TexasCentral;