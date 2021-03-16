import React from 'react'
import phils_kitchen from '../../images/phils_kitchen.jpg'
import {withRouter} from 'react-router-dom'

const  HeaderLeft = (props) => {
    const navHome = () => {
     props.history.push('/')
    }
    return (
        <div className = "header__left">
            <img className = "header__left--image" src = {phils_kitchen} 
            onClick = { () => navHome()}
            alt = "Logo"/>
        </div>
    )
}

export default withRouter(HeaderLeft)
