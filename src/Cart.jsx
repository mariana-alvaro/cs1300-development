import React from 'react'
import {Card, Button, ButtonGroup, Alert} from 'react-bootstrap';
import './App.css'

export default class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            show: false
        }
    }

    //Creates the dogs cards for the cart
    makeCard = (card, index) =>{
        return(
            <div >
                <Card border="info" className="text-center card" style={{ width: '18rem'}} key={index} >
                    <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
                    <Card.Body>
                    <Card.Title>{card.breed}</Card.Title>
                    <Card.Text>
                        
                        <h5>${card.price}</h5>
                        size: {card.size}
                        <br/>
                        exercise needed: {card.exercise}
                        
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="info" onClick={() =>this.props.minus(card)}>-</Button>
                            <Button variant="light">{card.quantity}</Button>
                            <Button variant="info" onClick={() =>this.props.plus(card)}>+</Button>
                        </ButtonGroup>
                    </Card.Text>
                      <Button  variant="info" onClick={() =>this.props.removeDog(card)}>Remove</Button> 
                    </Card.Body>
                </Card>
            </div>
        )
    }
      

    render(){ 
        const cart = this.props.cart
        const total = this.props.total
        return(
            <div className="cart" >
                <h2 id="cart">Your Pup Cart</h2>
                <div className="cartContainer">
                {cart.map(this.makeCard)}
                </div>
                <h4 >Total: ${total}</h4> 
                <Button variant="info" onClick={() => this.setState({show:true})}>Checkout</Button>
                <br/>
                
                    {/* displays an alert when the checkout button is pressed */}
                    <Alert show={this.state.show} variant="info">
                        <Alert.Heading>I hope you liked these pups!</Alert.Heading>
                        <p>
                            Could you decide for just one?
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                        <Button onClick={() => this.setState({show:false})} variant="info">Close</Button>
                        </div>
                    </Alert>
                <br/>
            </div>
            
        )
      
    }
}