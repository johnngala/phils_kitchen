import React from 'react'
import phils_kitchen from '../../images/phils_kitchen.jpg'
import {Link} from 'react-router-dom'

const  Footer = () => {
    return (
        <div className = "footer">
            <div className = "footer__page-break" />
            <div className = "footer__top">
                <Link className ="footer__top--link" to = "/cart">Cart</Link>
                <Link className ="footer__top--link" to = "/contact">Contact</Link>
                <Link className ="footer__top--link" to = "/about">About</Link>
            </div>
            <div className = "footer__lowest">
                <img className = 'footer__lowest--logo' src = {phils_kitchen} alt = "lowest footer logo" />
                <div className = 'footer__lowest--copyright'> &copy;John Ngala 2021</div>
            </div>
        </div>
    )
}

export default Footer
