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
                    <p  className = 'contact__top__paragraph'>philskitchen12@gmail.com</p>
                </div>

                <div className = 'contact__top__section'>
                    <img src = 'imgs/phone.png' alt = 'phone' className = 'contact__top__section__img'/>
                    <p  className = 'contact__top__paragraph'>+2547200400800 </p>
                </div>  

                 <div className='contact__top__section'>
                    <a href = "https://www.instagram.com/phils_kitchen/" className = "contact__top__section--link">
                        <img src='imgs/instagram.png' alt='youtube' className='contact__top__section__img' /> 
                    </a>
                    <a href = "https://www.instagram.com/phils_kitchen/" className = "contact__top__section--link">
                        <p className='contact__top__paragraph'>Phil's_Kitchen</p>
                    </a>
                </div>

                <div className='contact__top__section'>
                    <a href = "https://www.youtube.com/channel/UCsLjh1M9hA-4NZGp5nlqGoA" className = "contact__top__section--link">
                        <img src='imgs/youtube.png' alt='youtube' className='contact__top__section__img' /> 
                    </a>
                    <a href = "https://www.youtube.com/channel/UCsLjh1M9hA-4NZGp5nlqGoA" className = "contact__top__section--link">
                        <p className='contact__top__paragraph'>Phil's_Kitchen</p>
                    </a>
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
