import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext'
import {
    Button, Card, CardBody, CardImg,
    CardText,
    CardTitle, Col,
    Container, Row
} from 'reactstrap';
import './controller/Cart.css'
import { BsPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";

function Cart(props) {
    const [ cartList, setCartList ] = useState([]);
    const { cartItems, addToCart, decreaseQuality, getTotal } = useContext(CartContext);
    useEffect(() => {
        const newList = cartItems.filter((item) => {
            return item.quality > 0;
        });
        setCartList(newList)
    }, [cartItems]);
    return (
        <div>
            <Container className='container__cart__main'>
                <Row>
                {cartList.map((item) => 
                    <Col sm='12'>
                        <Card  className='product__box'>
                        <Row>
                            <Col className='cart-img' sm='4'>
                                <CardImg 
                                    top 
                                    width="100%"
                                    src={item.image} 
                                    alt="Card image cap" />
                            </Col>
                            <Col sm='2'>
                            </Col>
                            <Col className='cart-decription' sm='6'>
                                <CardBody>
                                    <CardTitle tag="h5">{item.name}</CardTitle>
                                    <CardText className='price'>$ {item.price}</CardText>
                                    <CardText className='decription2'>{item.decription2}</CardText>
                                    <BsFillDashCircleFill className='button' onClick={() => decreaseQuality(item)}/>
                                    <CardText className='quality'>{item.quality}</CardText>
                                    <BsPlusCircleFill className='button' onClick={() => addToCart(item)}/>
                                    {/* <Button onClick={() => addToCart(item)}>Add to Cart</Button> */}
                                </CardBody>
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                )}
                
                </Row>
                {getTotal() !== 0 ? 
                <div className="payment">
                    <p className="btn-payment">payment</p>
                    <p className="priceTotal">ToTal: {getTotal()}$</p>
                </div>:
                <p className='nothing'>Nothing...</p>
                }
                
            </Container>
        </div>
    );
}

export default Cart;