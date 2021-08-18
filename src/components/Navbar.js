import React, { useState } from 'react'
import logo from '../components/../images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'




export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    console.log(isMobile)

    return (
        <div className="navbar">
            <div className="navLogoName">
                <a className="navHomeLink" href="/">
                    <img src={logo} alt="" className="logoImage" />
                    <h1>Company</h1>
                </a>
            </div>
            <div className={isMobile ? "navLinksContainerMobile" : "navLinksContainer"}>
                <ul className="navLinksContainer">
                    <a href="/">
                    <button className="playButton">
                        Play 
                    </button></a>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">FAQ</a></li>
                </ul>
            </div>
         <GiHamburgerMenu className="navBurger" onClick={() => setIsMobile(!isMobile)} />
            
        </div>
    )
}


