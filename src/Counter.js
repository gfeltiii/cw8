import React, {Component} from 'react';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state ={
            count:5
        };
    }
    render(){
        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.incrementCount}>This Is An Increment Button</button>
            </>
        );
    }
    incrementCount = () => {
        this.setState(prevState => {return{
            count : prevState.count+1
        } });
    }
}
export default Counter;