import React from "react";
import "./Meme.css"
import memesData from "../memesData";

function Meme(){
    function generateMeme(){
        const randomNum = Math.floor(Math.random() * memesData.data.memes.length)
        console.log(memesData.data.memes[randomNum].url)
    }
    return(
        <div className="form">
            <div class="inputs">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
            </div>
            <button
                onClick={generateMeme}
                className="form--button"
            >
                <strong>Get a new meme image 🖼</strong>
            </button>
        </div>
    );
}

export default Meme;