import React from 'react'
import logo from '../components/../images/logo.png'
import navBurger from '../components/../images/navburger.png'


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navLogoName">
                <a className="navHomeLink" href="/">
                    <img src={logo} alt="" className="logoImage" />
                    <h1>Company</h1>
                    <div className="navLinksResponsive">
                        <img src={navBurger} alt="" className="navBurger" />
                    </div>
                </a>
            </div>
            <div className="navLinksContainer">
                <ul>
                    <a href="/">
                    <button className="playButton">
                        Play 
                    </button></a>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">FAQ</a></li>
                </ul>
            </div>
        </div>
    )
}


