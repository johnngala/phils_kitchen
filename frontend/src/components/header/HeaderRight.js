import React from 'react'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import {withRouter} from 'react-router-dom'

const  HeaderRight = (props) => {

    const goToCart = () => {
        props.history.push('/cart')
    }

    return (
        <div className = "header__right">
            <AiOutlineShoppingCart className = "header__right--cart"  onClick = {() => goToCart()}/>
        </div>
    )
}

export default withRouter(HeaderRight)
