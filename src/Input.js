import React from 'react';
export default class Input extends React.Component {
   state = {
    value: ""
  };
   // onChange = (e) => console.log(this.state.value + "-" + e.target.value);
   onChange = (e) => {
  this.setState( {value:e.target.value})
  let stateValue = ""
  try{
    stateValue = this.state.value;
  }
  catch(e){}
  console.log(stateValue + e.target.value);
};
    render(){
      console.log("render" + this.state.value);
        return (
        <div class="ui input">
            <input id="to_do_input"></input>
        </div>
        );
    }
}


