import React, { useState } from 'react'
import logo from '../../images/logo.svg'
import {loginAction , signUpAction} from '../../redux/actions/userActions'
import {setAlert} from '../../redux/actions/alertActions'
import {useDispatch} from 'react-redux'

const  Authenticate = () => {
    const[submitVal , setSubmitVal] = useState('Login')
    const [password ,setPassword] = useState('')
    const [email , setEmail] = useState('')

    const dispatch = useDispatch()

    const submit = async (e) => {
        e.preventDefault()
        if(password.length < 8){
            return dispatch(setAlert('Passwords must be at least 8 characters or more'))
        }
        submitVal === 'Login' ?  dispatch(loginAction(email ,password)) :  dispatch(signUpAction(email ,password))
    }

    const updateEmail = ( e ) => {
        setEmail(e.target.value)
    }

     const updatePassword = ( e ) => {
        setPassword(e.target.value)
    }

    const optionsClick = (e) => {
        setSubmitVal(e.target.id)
    }

    //Classes 
    let loginClass = submitVal ==='Login' ? 'auth__options--login auth__options--clicked' :
    'auth__options--login' ;

    let signUpClass = submitVal === 'Signup' ? 'auth__options--login auth__options--clicked' :
    'auth__options--login' ;

    return (
        <div className = 'auth__container'>
           <div className = 'auth__options'>
               <div className = {loginClass} id = 'Login' onClick = {(e) => optionsClick(e)}>Login</div>
               <div className = {signUpClass} id = 'Signup' onClick = {(e) => optionsClick(e)}>Signup</div>
           </div>
           <div className = 'auth'>
               <img  className = 'auth__header'src = {logo} alt = 'logo'/>
               <form className = 'auth__form' onSubmit = {(e) => {submit(e)}}>
                    <input className='auth__form--input' type = 'email' placeholder = 'email' onChange = { (e) => updateEmail(e)} />
                    <input className='auth__form--input' type = 'password' placeholder = 'password' onChange = { (e) => updatePassword(e) }/>
                    <input className='auth__form--submit' type = 'submit' value = 'Submit' />
               </form>
           </div>
        </div>
    )
}

export default Authenticate
