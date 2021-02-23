import React from 'react'

const Contact = () => {
    return (
       <>
        <h1 className = 'contact_us_heading'>Contact Us</h1>
        <div className = 'contact'>
            <div className = 'contact__top'>
                <h1  className = 'contact__top__h1'>Talk to us</h1>

                <div className = 'contact__top__section'>
                    <img src = 'imgs/location.png' alt = 'location' className = 'contact__top__section__img' />
                    <p  className = 'contact__top__paragraph'>Nairobi,Kenya</p>
                </div>

                <div className = 'contact__top__section'>
                    <img src = 'imgs/email.png' alt = 'email' className = 'contact__top__section__img'/>
                    <p  className = 'contact__top__paragraph'>example@example.com</p>
                </div>

                <div className = 'contact__top__section'>
                    <img src = 'imgs/phone.png' alt = 'phone' className = 'contact__top__section__img'/>
                    <p  className = 'contact__top__paragraph'>+2547200400800 </p>
                </div>   
            </div>

            <div className = 'contact__bottom'>
                <img src= 'imgs/contact_us.jpg' alt = 'contact' className = 'contact__bottom__image'/>
            </div>
        </div>
       </>
    )
}

export default Contact
