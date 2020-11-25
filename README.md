# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

Application Overview -Not Your Common Pup:
    This React application displays 16 cards with information about not-so-common dog breeds. Each card contains
    an image of the dog, the breed name, size and exercise needs information, price, and a "This is the one!" 
    button that adds the dog card to a cart. A user can reach the cart by clicking on the "My Pup Cart" button in
    the navbar or by scrolling down.

Components Overview:
    My application has an index, and App, and the components NavBar, FilteredList, DisplayList, and Cart related in
    the following way:

    -My index renders the App.

    -App contains the list of dogs with their different characteristics and an initial quantity of 0. It returns an
    instance of FilteredList to pass the list of dogs to the component.

    -NavBar renders a bootstrap Navbar with the "My Pup Cart" button to scroll down to the cart and the "Filter by: Size",
    "Filter by: Exercise Needs", and "Sort by: Price" dropdown buttons. The dropdown buttons receive their corresponding
    filtering and sorting methods as a props from FilteredList.

    -FilteredList has the methods for both filters, sorting, adding, removing, and incrementing/decreasing dog quantities
    from the cart. It filters and sorts the list received from App, and then passes it to DisplayList. It passes the addToCart()
    method to DisplayList, the filtering and sorting methods to NavBar, and the state of the card, the total price, the removeFromCart(),
    plusDog(), and minusDog() methods to Cart.

    -DisplayList maps a bootstrap card to each element on the dog list received as a props from DisplayList in the render method.

    -Cart has a makeCard() method to create the cards for the dogs inside the cart. These cards have +/- buttons that increase/decrease
    the quantity of dogs in the card and a "Remove" button that eliminates the dog card from the cart. Additionally, the bottom of the Cart
    displays the total price of the dogs in the cart and has a "Checkout" button that displays an "I hope you liked these pups!" alert 
    whenever clicked.

Functions Overview:
    Most methods are coded in my FilteredList component:

    -matchesFilterSize(item) returns true when the state of the size equals the item size. Else, returns false. Then, onSelectFilterSize(event)
    sets the state of the size to the received event from the handler. matchesFilterExercise(item) and onSelectFilterExercise(event) have the
    same functionality for the exercise state. The list of dogs is filtered using the matchesFilterExercise/Size criteria in the render method.

    -sortByPrice(items) 

User Interactions Overview:


