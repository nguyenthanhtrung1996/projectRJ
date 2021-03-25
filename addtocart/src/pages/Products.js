
import React, { useContext } from 'react';
import {
    Button, Card, CardBody, CardImg,
    CardText,
    CardTitle, Col,
    Container, Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption

} from 'reactstrap';
import { CartContext } from '../contexts/CartContext';
import './controller/Products.css'


const Products = (props) => {

    const { cartItems, addToCart } = useContext(CartContext);
    console.log(cartItems);

    return(
        <Container className='container__products__main'>
            <Row>
                {cartItems.map((item) => (
                    <Col sm='4'>
                        <Card className='Card'>
                            <CardImg 
                                top 
                                width="100%"
                                src={item.image} 
                                alt="Card image cap" />
                            <CardBody className='cardbody'>
                                <CardTitle tag="h5">{item.name}</CardTitle>
                                <CardText className="price">$ {item.price}</CardText>
                                <CardText className="">{item.decription1}</CardText>
                                <Button className='btn' onClick={() => addToCart(item)}>Add to Cart</Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
                
            </Row>
        </Container>
    )
}

export default Products;