import React from 'react'
import {  connect } from 'react-redux';
import{increaseQuantity,decreaseQuantity,updateAmount} from './action';
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardTitle } from 'react-bootstrap';
import './card.css';


function Quantity({products, increaseQuantity ,decreaseQuantity }) {
//  React.useEffect(()=>{
//     products.forEach(product=>{
//         updateAmount(product.id);
//     })
    
 
//  },{products,updateAmount});
 
 
    return (
        <div className='container-fuild'>
            <h1 className='h1'>MOBILE CART</h1>
    <div className='container'>
        
        
        {products.map(product=>(
            <Card className="customcard"  style={{width:'18rem'}} key={product.id}>
                <CardHeader>{product.title}</CardHeader>
                <CardImg className='img' variant='top ' src={product.image}/>
                <CardBody className='cardbody'>
                <CardTitle>{product.title}</CardTitle>
        <Button variant='primary' onClick={()=>decreaseQuantity(product.id)}>-</Button>
        <span>Quantity:{product.quantity}</span>
        <Button variant='primary' onClick={()=>increaseQuantity(product.id)}>+</Button>
        <CardFooter>Totl Amount:${product.amount}</CardFooter>
        <Button>ADD TO CART</Button>
        </CardBody>
         </Card>
        ))}
       
    </div>
    </div>
    
  );
}

const mapStateToProps = state =>({
    products:state.products
});

const mapDispatchToProps = {
    increaseQuantity,
    decreaseQuantity,
    updateAmount
};

export default connect(mapStateToProps,mapDispatchToProps)( Quantity);