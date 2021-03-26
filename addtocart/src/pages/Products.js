
import React, { useContext } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Button, Card, CardBody, CardImg,
    CardText,
    CardTitle, Col,
    Container, Row
} from 'reactstrap';
import { CartContext } from '../contexts/CartContext';
import './controller/Products.css';
toast.configure()

const Products = (props) => {

    const { cartItems, addToCart } = useContext(CartContext);
    // console.log(cartItems);

    


    
    const notify = (item) => {
        toast(`Add ${item.name} Success`,{autoClose:2000});
        console.log(); 
    }
    

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
                                <Button className='btn' onClick={() => {addToCart(item);notify(item);}}>Add to Cart</Button>
                                
                            </CardBody>
                        </Card>
                    </Col>
                ))}
                
            </Row>
        </Container>
    )
}

export default Products;