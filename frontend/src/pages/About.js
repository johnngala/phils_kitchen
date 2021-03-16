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
            <p> 
                Welcome to Phil's Kitchen!

                I Cook. I Take a Shot. I Blog. I Eat. I Repeat.

                It's all about Quick and Easy Recipes.

                Let's talk Good Food!

                For more on my food journey follow me on Instagram.
            </p>
            </div>
        </div>
    )
}

export default Contact
