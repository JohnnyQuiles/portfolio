import React from "react";
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div className="App">
            <div className="App-header">
                <h1 className='App-logo'><Link className='App-logo' to="/">J Quiles</Link></h1>
                <nav className="App-nav">
                    <h3><Link className='App-link' to="/about">About</Link></h3>
                    <h3><Link className='App-link' to="/contact">Contact</Link></h3>
                </nav>
            </div>
        </div>
    )
}
export default NavBar; 