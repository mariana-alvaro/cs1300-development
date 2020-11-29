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

    -sortByPrice(items) uses React's sort method and returns the price of object a minus the price of object b if the user selects Low to High
    and the price of b minus the price of a if the user selects High to Low. Then, sortChoice(event) sets the state of the size to the received
    event from the handler.

    -addToCart(card) is the method that adds a dog card to the cart. First, it checks if the card already exists in the card. If it exists, it
    increments the quantity of dogs from that card and updates the state of the card. If it doesn't exist, it adds the card to the cart and 
    increments the dog quantity. Last, it sums and updates the total price.

    -removeFromCart(card) removes an entire card from the cart. It uses React's filter method to remove the selected card. Then, it updates the 
    total price of the cart and sets that dog's quantity to 0.

    -plusDog(card) adds another dog from a specific card. It increments the quantity of the dog and the total price, and then sets the state to 
    the new quantity and price.

    -minusDog(card) decrements the quantity of dogs from a specific card. It works similarly to plusDog except that if the quantity of dogs is 1,
    then it would remove the card from the cart.

    -The Cart component has a makeCard method that takes in a card and an index and creates the cards with different indexes for the dogs in the cart.

User Interactions Overview:
    -The default state for the size and exercise needs filters is "All". When a user selects a different size or exercise need, the state changes to
    the selected one, calling the filtering options.

    -The default state for sorting is "other", equivalent to "Unsorted" in the app. If the user selects to sort from High to Low, the state changes to
    "desc", and if the user selects "Low to High", it changes to "asc". Thus, the sortByPrice method is called and the list of dogs is sorted accordingly.

    -The default state of the cart is an empty array. When the addToCart, removeFromCart, plusDog, and minusDog methods are called, the state of the cart 
    is modified either by adding or removing an item from the cart array or by changing the quantity of an existing card. Additionally, the total price
    of the cart also starts in 0. When these methods are called by clicling the "This is the one!" or the +/- buttons, the state of the total price of the 
    cart will be constantly updating.

    -In the Cart component, the checkout button will show an alert whenever clicked. Normally, the state of "show" will be set to false, but when the user
    clicks "Checkout", the state is set to true and thus, the alert appears.



