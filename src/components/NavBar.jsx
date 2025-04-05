import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='navBar'>
            <h1 className='navTitle'>
            🛡️ D&D Character Builder
            </h1>
                <div className='navLinks'>
                    <Link to='/'>
                    Home   
                    </Link>
                    <Link to='/builder'>
                    Build A Character
                    </Link>
                    <Link to='/about'>
                    About
                    </Link>
                </div>
        </nav>
    )
}

export default NavBar