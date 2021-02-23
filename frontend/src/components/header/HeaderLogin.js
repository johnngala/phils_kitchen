import React from 'react'
import {withRouter} from 'react-router-dom';

const  HeaderLogin = (props) => {
    const navLogin = () => {
        props.history.push('/auth')
    }
    return <input className= "header__login" type = "submit" 
    onClick = { () => navLogin()} value = "Login"/>     
}
    
export default withRouter(HeaderLogin)
    