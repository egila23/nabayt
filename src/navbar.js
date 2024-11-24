import React from "react";
import { Link } from "react-router-dom";

const navbar = () =>{
    return (
        <nav>
            <h1>Nabayt</h1>
            <ul>
                <li>
                   <Link to="/home.tsx">Home</Link>
                </li>
                <li>
                <Link to="/stories.tsx">Stories</Link>
                </li>
                <li>
                <Link to="/offerings.tsx">Offerings</Link>
                </li>
                <li>
                <Link to="/about.tsx">About</Link>
                </li>
            </ul>
            <button> <Link to="/sharestory.tsx">Share Story</Link>/</button>
        </nav>
    )
}
export default navbar;