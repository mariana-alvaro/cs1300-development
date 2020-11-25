import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FilteredList from "./FilteredList"
import './App.css'

// Create list of dogs 
function App() {
  const pupList = [
    { image: "/images/collie.jpeg", breed: "Bearded Collie", size: "large", exercise:"high", price: 1500, quantity:0},
    { image: "/images/puli.jpg", breed: "Puli", size: "medium", exercise:"medium", price: 1100, quantity:0},
    { image: "/images/bullmastiff.jpeg", breed: "Bullmastiff", size: "large", exercise:"low", price: 1200, quantity:0},
    { image: "/images/chesapeake.jpg", breed: "Chesapeake Bay Retriever", size: "large", exercise:"medium", price: 800, quantity:0},
    { image: "/images/chowchow.jpg", breed: "Chow Chow", size: "large", exercise:"low", price: 3200, quantity:0},
    { image: "/images/portu.jpeg", breed: "Portuguese Water Dog", size: "large", exercise: "high", price: 4000, quantity:0},
    { image: "/images/pointer.jpg", breed: "Pointer", size: "large", exercise:"high", price: 900, quantity:0},
    { image: "/images/papillon.jpg", breed: "Papillon", size: "small", exercise: "low", price: 700, quantity:0},
    { image: "/images/harrier.jpg", breed: "Harrier", size: "large", exercise:"high", price: 2000, quantity:0},
    { image: "/images/setter.jpeg", breed: "Irish Setter", size: "large", exercise:"high", price: 800, quantity:0},
    { image: "/images/toyfox.jpeg", breed: "Toy Fox", size: "small", exercise:"low", price: 1000, quantity:0},
    { image: "/images/whippet.jpeg", breed: "Whippet", size: "medium", exercise:"medium", price: 1750, quantity:0},
    { image: "/images/norwich.jpeg", breed: "Norwich Terrier", size: "small", exercise:"medium", price: 2500, quantity:0},
    { image: "/images/skye.jpeg", breed: "Skye Terrier", size: "medium", exercise:"low", price: 1750, quantity:0},
    { image: "/images/brittany.jpeg", breed: "Brittany", size: "medium", exercise:"high", price: 700, quantity:0},
    { image: "/images/parson.jpeg", breed: "Parson Russelll Terrier", size: "small", exercise:"high", price: 1000, quantity:0}
  ]

  return (
    <div className="App">
      <FilteredList list={pupList}/>
    </div>
  );
}

export default App;
