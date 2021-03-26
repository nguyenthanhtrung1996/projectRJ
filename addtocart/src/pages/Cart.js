import React, { useContext, useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { BsFillDashCircleFill, BsPlusCircleFill, BsFillXSquareFill } from "react-icons/bs";
import {
    Card, CardBody, CardImg,
    CardText,
    CardTitle, Col,
    Container, Row
} from 'reactstrap';
import { CartContext } from '../contexts/CartContext';
import './controller/Cart.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Cart(props) {
    const [ cartList, setCartList ] = useState([]);
    const { cartItems, addToCart, decreaseQuality, getTotal, deleteProduct } = useContext(CartContext);
    useEffect(() => {
        const newList = cartItems.filter((item) => {
            return item.quality > 0;
        });
        setCartList(newList)
    }, [cartItems]);

    const notifyIncrease = (item) => {
        toast(`Add ${item.name} Success`,{autoClose: 1500});
        addToCart(item)
        // console.log(item); 
    }

    const notifyDecrease = (item) => {
        toast(`Reduce ${item.name} Success`,{autoClose: 1500});
        decreaseQuality(item)
        // console.log(item); 
    }

    const submitDelete = (item) => {
        confirmAlert({
          title: 'Confirm to submit',
          message: `Do you want to delete ${item.name}?`,
          buttons: [
            {
              label: 'Yes',
              onClick: () => deleteProduct(item)
            },
            {
              label: 'No',
            }
          ]
        });
    }


    return (
        <div>
            <Container className='container__cart__main'>
                <Row>
                {cartList.map((item) => 
                    <Col sm='12'  className='product__box'>
                        <div className='icon__box'>
                            <BsFillXSquareFill className='iconDelete' onClick={() => submitDelete(item)}/>
                        </div>
                        <Card  className='product__box__content'>
                        
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
                                    <BsFillDashCircleFill className='button' onClick={() => {notifyDecrease(item);}}/>
                                    <CardText className='quality'>{item.quality}</CardText>
                                    <BsPlusCircleFill className='button' onClick={() => notifyIncrease(item)}/>
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