import React from 'react'

const Contact = () => {
    return (
        <div className = 'about'>
            <h1 className = 'about_us_heading'>About Us</h1>
            <div className = 'about__top'>
                <img src= 'imgs/about_us.jpg' alt = 'about' className = 'about__top__image'/>
            </div>
            <div className = 'about__bottom'>
            <h1  className = 'about__bottom'>Get to know us</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default Contact
