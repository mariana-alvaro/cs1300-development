import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FilteredList from "./FilteredList"
import DisplayList from "./DisplayList"
import './App.css'
import NavBar from './NavBar'

function App() {
  const pupList = [
    { image: "/images/collie.jpeg", breed: "Bearded Collie", size: "large", exercise:"high", price: 1500},
    { image: "/images/puli.jpg", breed: "Puli", size: "medium", exercise:"medium", price: 1100},
    { image: "/images/bullmastiff.jpeg", breed: "Bullmastiff", size: "extra large", exercise:"low", price: 1200},
    { image: "/images/chesapeake.jpg", breed: "Chesapeake Bay Retriever", size: "large", exercise:"medium", price: 800},
    { image: "/images/chowchow.jpg", breed: "Chow Chow", size: "large", exercise:"low", price: 3200},
    { image: "/images/portu.jpeg", breed: "Portuguese Water Dog", size: "large", exercise: "high", price: 4000},
    { image: "/images/pointer.jpg", breed: "Pointer", size: "large", exercise:"high", price: 900},
    { image: "/images/papillon.jpg", breed: "Papillon", size: "small", exercise: "low", price: 700},
    { image: "/images/harrier.jpg", breed: "Harrier", size: "large", exercise:"high", price: 2000},
    { image: "/images/setter.jpeg", breed: "Irish Setter", size: "large", exercise:"high", price: 800},
    { image: "/images/toyfox.jpeg", breed: "Toy Fox", size: "small", exercise:"low", price: 1000},
    { image: "/images/whippet.jpeg", breed: "Whippet", size: "medium", exercise:"medium", price: 1750}
  ]

  return (
    <div className="App">
      <FilteredList list={pupList}/>
      {/* <DisplayList list={pupList}/> */}
    </div>
  );
}

export default App;
