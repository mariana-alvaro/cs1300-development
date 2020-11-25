import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './App.css'

export default class DisplayList extends React.Component{
  constructor(props){
    super(props)
  }

  //Creates the dog cards
  render(){ 
    return(
        <div className="cardContainer">
          {this.props.list.map((card, index) => {
            return(
              <Card border="info" className="text-center card" style={{ width: '18rem' }} key={index} >
                <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
                 <Card.Body>
                  <Card.Title>{card.breed}</Card.Title>
                  <Card.Text>
                      <h5>${card.price}</h5>
                      size: {card.size}
                      <br/>
                      exercise needed: {card.exercise}
                  </Card.Text>
                  <Button  variant="info" onClick={()=> this.props.add(card)}>This is the one!</Button> 
                </Card.Body>
              </Card>
            )
          }
            
        )}
        </div>
      )
  }
}