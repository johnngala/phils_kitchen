import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {sale} from '../../dummyData/courses'
import {TiDeleteOutline} from 'react-icons/ti'
import {removeFromCart} from '../../redux/actions/cartActions'
import CartTotal from './CartTotal'

function CartItems() {
    const {cart}  = useSelector((state) => state.cartReducer)

    const dispatch = useDispatch()

    const removeItem = (item) => {
        dispatch(removeFromCart(cart ,item))
    }

    const itemList = cart.map((el , i) => (
        <div key = {el.id}>
            <div className = 'cart-item'>
                 <img className = 'cart-item__image' src ={el.img} alt = ''/>
                <div className = 'cart-item__text'>
                    <div className = 'cart-item__text--title'>{el.title}</div>
                    {/* <div className = 'cart-item__text--author'>{el.author}</div> */}
                </div>
                <div className = 'cart-item__price'>
                    {el.saleOptIn ? el.price * sale : el.price}
                </div>
                <div className = 'cart-item__remove' onClick = {() => removeItem(el)}>
                    <TiDeleteOutline />
                </div>
            </div>
            {
              i+1 === cart.length ? null : <div className = 'cart-item__underline' />  
            }
        </div>
    ))

    return (
        <div className = 'cart-items__container'>
            <div className = 'cart__title'>Cart</div>
            <div className = 'cart-items'>{itemList}</div>
            <div className = 'cart-items__break' />
            <CartTotal/>

            <div  className = 'contact__to__buy--button' >
                <a href="https://wa.me/0722882815"  className = 'contact__to__buy--button--link '>
                    <img src = 'imgs/whatsapp-medium.png' alt='whatsapp' className = 'contact__to__buy--button--image'/> 
                </a>
                <a href="https://wa.me/0722882815" className = 'contact__to__buy--button--link '>
                    <p className = 'contact__to__buy--button--paragraph'>Contact to Buy</p>
                </a>
            </div>
        </div>
         

    )
}

export default CartItems
