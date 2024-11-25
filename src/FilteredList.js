import React,{Component} from 'react';
import List from './List';
import {DropdownButton, DropdownItem} from 'react-bootstrap';
class FilteredList extends Component {
    constructor(props){
        super(props);
        this.state={
            search:"",
            category:"All"
        };
    }
    onSearch = (event) => {
        this.setState({search:event.target.value.toLowerCase()});
    }
    filterItem = (item) => {
        if(this.state.category=="All" || this.state.category==item.type)
            return item.name.toLowerCase().search(this.state.search)!==-1;
        return 0;
    }
    change = (event) => {
        this.setState({category:event.target.value});
    }
    render() {
        return(
            <div className='filter-list'>
                <h1>Produce Search</h1><br></br>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filters
                </button>
            <div className="dropdown-menu"  aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" onClick={this.change} value="All" type="button">All</button>
                <button className="dropdown-item" onClick={this.change} value="Fruit" type="button">Fruit</button>
                <button className="dropdown-item" onClick={this.change} value="Vegetable" type="button">Vegetable</button>
  </div>
</div><br></br>
                <input type='text' placeholder='Search' onChange={this.onSearch}/>
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        )
    }
}
export default FilteredList;


