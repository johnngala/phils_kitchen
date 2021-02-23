import React from 'react'
import logo from '../../images/logo.svg'
import {Link} from 'react-router-dom'

const  Footer = () => {
    return (
        <div className = "footer">
            <div className = "footer__page-break" />
            <div className = "footer__top">
                <Link className ="footer__top--link" to = "/auth">Join</Link>
                <Link className ="footer__top--link" to = "#">Teach</Link>
                <Link className ="footer__top--link" to = "/contact">Contact</Link>
                <Link className ="footer__top--link" to = "/about">About</Link>
            </div>
            <div className = "footer__lowest">
                <img className = 'footer__lowest--logo' src = {logo} alt = "lowest footer logo" />
                <div className = 'footer__lowest--copyright'> &copy;John Ngala 2021</div>
            </div>
        </div>
    )
}

export default Footer
