import React from 'react'

import CustomButton from '../customButton/customButtomComponent'

import './cartDropdownStyles.scss'

const CartDropDown = () =>(
    <div className = 'cart-dropdown'> 
    <div className ='cart-items'/>
    <CustomButton>TO CHECKOUT</CustomButton>
    </div>
)


export default CartDropDown;