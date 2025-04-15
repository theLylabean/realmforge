import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className='navBar'>
                <h2 className='navTitle'>
                🛡️ RealmForge D&D Character Builder
                </h2>
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
                        <Link to='/signup'>
                            Sign Up
                        </Link>
                    </div>
            </nav>
        </>
    )
}

export default NavBar