import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Nav, Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';
import { CartContext } from '../contexts/CartContext';
import './NavBar.css'


const NavBar = (props) => {
  const [ quality, setQuality ] = useState(0);
  const { cartItems, addToCart } = useContext(CartContext);
  console.log(cartItems);
  useEffect(()=> {
    if(cartItems.length >0 ){
      let number = 0;
      cartItems.forEach(element => {
        number = number + element.quality
      });
      console.log(number);
      setQuality(number);
    }
  }, [cartItems]);

  return (
    <div>
      <Navbar expand="md">
        <Container className='container__header'>
          <NavbarBrand href="/">ADIDAS</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink>
                  <Link className='nav__link' to='/'>Products</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <Link className='nav__link' to='/Cart'>Cart ({quality})</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <Link className='nav__link' to='/Setting'>Setting</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;