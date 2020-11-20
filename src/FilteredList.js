import React from 'react';
import DisplayList from './DisplayList';
import NavBar from './NavBar'

export default class FilteredList extends React.Component {
    constructor(props){
        super(props)
        this.matchesFilterSize = this.matchesFilterSize.bind(this)
        this.onSelectFilterSize = this.onSelectFilterSize.bind(this)
        this.state = {
            size: "All"

        }
        
    }

    onSelectFilterSize(event){
        event.preventDefault()
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
    render(){
        return(
            <div>
                <NavBar onSelect={this.onSelectFilterSize}/>
                <DisplayList list={this.props.list.filter(this.matchesFilterSize)} />
                
            </div>
            
        )
    }
}