import React from 'react';
export default class Input extends React.Component {

   // onChange = (e) => console.log(this.state.value + "-" + e.target.value);
    render(){
      console.log("render" + this.props.show);

        return (
        <div class="ui input">
            <input onChange={this.props.onChangeHandler} id="to_do_input" >{this.props.show}</input>
        </div>
        );
    }
}


