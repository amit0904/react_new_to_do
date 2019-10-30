import React from 'react';
import Input from './Input';
import Button from './Button';
export default class App extends React.Component {
    render(){
        return (
            <div className ="ui four column centered grid">
            <div className ="ui segment">
            <h1>React to do App</h1>
            <Input></Input>
            <Button onClick = {(e) => {console.log("outside button")} }></Button>
            </div>
            </div>
        );
    }
}
