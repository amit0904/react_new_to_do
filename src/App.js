import React from 'react';
import Input from './Input';
import Button from './Button';
import TODOLIST from './ToDoList'

export default class App extends React.Component {
    
    state = {
        itemEntered: "",
        todos: []
    }

    onChange = (e) => {

        this.setState( {itemEntered:e.target.value});
    }

    onClick = (e) => {
        // this.setState((prevState) => {prevState.todos.push(this.state.itemEntered)});
           this.setState({todos : [...this.state.todos,this.state.itemEntered]})
        
        this.setState( {itemEntered:""});
    }
    render(){
        console.dir(this.state.todos)
        return (
            <div className ="ui four column centered grid">
            <div className ="ui segment">
                <h1>React to do App</h1>
                <Input onChangeHandler={this.onChange} show={this.state.itemEntered}/>
                <Button onClickHandler={this.onClick}/>
                <TODOLIST itemsList={this.state.todos}/>
            </div>
            </div>
        )
    }
}
