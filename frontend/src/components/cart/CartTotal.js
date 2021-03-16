import React from 'react'
import {useSelector} from 'react-redux'

function CartTotal() {
    const {total} = useSelector((state) =>state.cartReducer )
    return (
        <div className = 'cart-items__total'>
            Total : Ksh{total}
        </div>
    )
}

export default CartTotal
