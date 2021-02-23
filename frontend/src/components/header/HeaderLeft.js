import React from 'react'
import logo from '../../images/logo.svg'
import {withRouter} from 'react-router-dom'

const  HeaderLeft = (props) => {
    const navHome = () => {
     props.history.push('/')
    }
    return (
        <div className = "header__left">
            <img className = "header__left--image" src = {logo} 
            onClick = { () => navHome()}
            alt = "Logo"/>
        </div>
    )
}

export default withRouter(HeaderLeft)
