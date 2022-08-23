import React from 'react';
import {
  CartContainer,
  Icon,
  CloseIcon,
  CartMenu,
  CartLink,
  CartRoute,
  SideBtnWrap
} from './CartElements';

const Cart = ({ cartIsOpen, cartToggle }) => {
  return (
    <CartContainer isOpen={cartIsOpen} onClick={cartToggle}>
      <Icon onClick={cartToggle}>
        <CloseIcon />
      </Icon>
      <CartMenu>
        <CartLink to='/'>Pizzas</CartLink>
        <CartLink to='/'>Desserts</CartLink>
        <CartLink to='/'>Full Menu</CartLink>
      </CartMenu>
      <SideBtnWrap>
        <CartRoute to='/'>Order Now</CartRoute>
      </SideBtnWrap>
      
    </CartContainer>
  );
};

export default Cart;
