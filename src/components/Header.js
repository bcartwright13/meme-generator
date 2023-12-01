import React from "react";
import "./Header.css"

function Header(){
    return(
        <div class="header">
            <div class="left">
                <img src="/images/TrollFace.png" alt = "Troll Face"/>
                <h2>Meme Generator</h2>
            </div>
            <div class="right">
                <h4>React Course - Project 3</h4>
            </div>
        </div>
    );
}

export default Header;