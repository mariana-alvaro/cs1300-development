import React from 'react'
import {Navbar, Nav, DropdownButton, Dropdown} from 'react-bootstrap'
import FilteredList from './FilteredList'

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Navbar bg="info" expand="lg" variant="dark">
                <Navbar.Brand href="#home"><h3>Find My Pup</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">My Pup Cart</Nav.Link>
                    </Nav>
                    <DropdownButton id="dropdown-basic-button" title="Filter by: Size" variant="info">
                        <Dropdown.Item ><Dropdown.Link eventKey="All" onSelect={this.props.onSelect}>All</Dropdown.Link></Dropdown.Item>
                        <Dropdown.Item ><Dropdown.Link eventKey="small" onSelect={this.props.onSelect}>Small</Dropdown.Link></Dropdown.Item>
                        <Dropdown.Item><Dropdown.Link eventKey="medium" onSelect={this.props.onSelect}>Medium</Dropdown.Link></Dropdown.Item>
                        <Dropdown.Item ><Dropdown.Link eventKey="large" onSelect={this.props.onSelect}>Large</Dropdown.Link></Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Filter by: Exercise Needs" variant="info">
                        <Dropdown.Item >All</Dropdown.Item>
                        <Dropdown.Item >Low</Dropdown.Item>
                        <Dropdown.Item >Medium</Dropdown.Item>
                        <Dropdown.Item >High</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Sort by Price" variant="info">
                        <Dropdown.Item >Low to High</Dropdown.Item>
                        <Dropdown.Item >High to Low</Dropdown.Item>
                    </DropdownButton>
                </Navbar.Collapse>
            </Navbar>
        
        )
    }
}
