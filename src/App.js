import React from 'react';
import Input from './Input';
import Button from './Button';
export default class App extends React.Component {
    
    state = {
        value: "",
        todos: []
      }

      onChange = (e) => {
        this.setState( {value:e.target.value});
        console.log('TEST');
    }

    onClick = (e) => {
        this.setState( {todos:[this.state.value]});
        this.setState( {value:''});
    }
    render(){
        console.log(this.state.todos);
        return (
            <div className ="ui four column centered grid">
            <div className ="ui segment">
            <h1>React to do App</h1>
            <Input onChangeHandler={this.onChange} show={this.state.value}></Input>
            <Button onClickHandler={this.onClick}></Button>
            </div>
            </div>
        );
    }
}
