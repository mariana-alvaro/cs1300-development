import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './App.css'

export default class DisplayList extends React.Component{
    constructor(props){
        super(props)
    }
    makeCard(card, index){
        return(
          <Card border="info" className="text-center card" style={{ width: '18rem' }} key={index} >
            <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
            <Card.Body>
              <Card.Title>{card.breed}</Card.Title>
              <Card.Text>
                <p>
                  <h5>${card.price}</h5>
                  size: {card.size}
                  <br/>
                  exercise needed: {card.exercise}
                </p>
              </Card.Text>
              <Button variant="info">This is the one!</Button>
            </Card.Body>
          </Card>
        )
      }
    render(){ 
      return(
          <div className="cardContainer">
              {this.props.list.map(this.makeCard)}
              {/* {this.props.list.map(item => <li>{item.breed}, {item.size}</li>)} */}
          </div>
      )
    }
}