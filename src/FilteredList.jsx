import React from 'react';
import DisplayList from './DisplayList';
import NavBar from './NavBar'
import Cart from './Cart'

export default class FilteredList extends React.Component {
    
    constructor(props){
        super(props)
        this.matchesFilterSize = this.matchesFilterSize.bind(this)
        this.onSelectFilterSize = this.onSelectFilterSize.bind(this)
        this.matchesFilterExercise = this.matchesFilterExercise.bind(this)
        this.onSelectFilterExercise = this.onSelectFilterExercise.bind(this)
        this.sortChoice = this.sortChoice.bind(this)
        this.sortByPrice = this.sortByPrice.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.removeFromCart = this.removeFromCart.bind(this)
        this.plusDog = this.plusDog.bind(this)
        this.minusDog = this.minusDog.bind(this)
        this.state = {
            size: "All",
            exercise: "All",
            sortType: "other",
            cart: [],
            totalprice: 0
        }
        
    }

    //These two methods filter the dogs by size
    onSelectFilterSize(event){
        this.setState({size: event})
    }
    matchesFilterSize(item){
        if(this.state.size === "All"){
            return true
        } else if (this.state.size === item.size) {
            return true
        } else {
            return false
        }
    }

    //These two methods filter the dogs by exercise needs
    onSelectFilterExercise(event){
        this.setState({exercise: event})
    }

    matchesFilterExercise(item){
        if(this.state.exercise === "All"){
            return true
        } else if (this.state.exercise === item.exercise) {
            return true
        } else {
            return false
        }
    }

    //These two methods sort the dogs by price
    sortByPrice(items){
        if(this.state.sortType === 'asc'){
            items.sort((a,b) => {
                return a.price - b.price
            }) 
        } else if(this.state.sortType === 'desc'){
            items.sort((a,b) => {
                return b.price - a.price
            })   
        }
    }
    sortChoice(event){
        this.setState({sortType: event})
    }

    //Method to add a dog card to the cart
    addToCart(card) {
        let itemInCart = this.state.cart.find(item => card.breed === item.breed)
        if(itemInCart){
            card.quantity++
            const cart = this.state.cart
            this.setState({cart})
        } else {
            const cart = [...this.state.cart, card]
            card.quantity++
            this.setState({cart})
        }
        const totalprice = this.state.totalprice + card.price
        this.setState({totalprice})
    }

    //Method to remove a dog card from the cart
    removeFromCart(card){
        const cart = this.state.cart
        this.setState({ cart: cart.filter(dog => dog.breed !== card.breed)})
        const totalprice = this.state.totalprice - card.price*card.quantity
        this.setState({totalprice})
        card.quantity = 0
    }

    //Adds another dog from the same breed to the card
    plusDog(card) {
        card.quantity ++
        const cart = this.state.cart
        this.setState({cart})
        const totalprice = this.state.totalprice + card.price
        this.setState({totalprice})
    }

    //Takes out one dog from the same breed from the card
    minusDog(card) {
        const cart = this.state.cart
        if (card.quantity === 1) {
            this.setState({ cart: cart.filter(dog => dog.breed !== card.breed)})
            const totalprice = this.state.totalprice - card.price
            this.setState({totalprice})
            card.quantity = 0
        } else {
            card.quantity --
            this.setState({cart})
            const totalprice = this.state.totalprice - card.price
            this.setState({totalprice})
        }
        
    }

    render(){
        const items = this.props.list.filter(this.matchesFilterSize).filter(this.matchesFilterExercise)
        this.sortByPrice(items)
        return(
            <div>
                <NavBar onSelect={this.onSelectFilterSize} onSelect2={this.onSelectFilterExercise} onSelect3={this.sortChoice} />
                <DisplayList list={items} add={this.addToCart} />   
                <Cart cart={this.state.cart} total={this.state.totalprice} removeDog={this.removeFromCart} plus={this.plusDog} minus= {this.minusDog}/>
            </div>
            
        )
    }
}