import React from 'react'
import {Navbar, Nav, DropdownButton, Dropdown} from 'react-bootstrap'

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }

    //Creates the Navigation Bar
    render(){
        return ( 
            <Navbar bg="info" expand="lg" variant="dark">
                <Navbar.Brand><h3>Not Your Ordinary Pup</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#cart">Your Pup Cart </Nav.Link>
                    </Nav>
                    {/* ({this.props.list.length}) */}
                    <DropdownButton id="dropdown-basic-button" title="Filter by: Size" variant="info">
                        <Dropdown.Item eventKey="All" onSelect={this.props.onSelect}>All</Dropdown.Item>
                        <Dropdown.Item eventKey="small" onSelect={this.props.onSelect}>Small</Dropdown.Item>
                        <Dropdown.Item eventKey="medium" onSelect={this.props.onSelect}>Medium</Dropdown.Item>
                        <Dropdown.Item eventKey="large" onSelect={this.props.onSelect}>Large</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Filter by: Exercise Needs" variant="info">
                        <Dropdown.Item eventKey="All" onSelect={this.props.onSelect2}>All</Dropdown.Item>
                        <Dropdown.Item eventKey="low" onSelect={this.props.onSelect2}>Low</Dropdown.Item>
                        <Dropdown.Item eventKey="medium" onSelect={this.props.onSelect2}>Medium</Dropdown.Item>
                        <Dropdown.Item eventKey="high" onSelect={this.props.onSelect2}>High</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Sort by: Price" variant="info">
                        <Dropdown.Item eventKey="other" onSelect={this.props.onSelect3}>Unsorted</Dropdown.Item>
                        <Dropdown.Item eventKey="asc" onSelect={this.props.onSelect3}>Low to High</Dropdown.Item>
                        <Dropdown.Item eventKey="desc" onSelect={this.props.onSelect3}>High to Low</Dropdown.Item>
                    </DropdownButton>
                </Navbar.Collapse>
            </Navbar>
        
        )
    }
}
