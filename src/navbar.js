import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h1>Nabayt</h1>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/stories">Stories</Link>
                </li>
                <li>
                    <Link to="/offerings">Offerings</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <button>
                <Link to="/sharestory">Share Story</Link>
            </button>
        </nav>
    );
};

export default Navbar;