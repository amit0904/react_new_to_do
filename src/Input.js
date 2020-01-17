import React from 'react';

export default class Input extends React.Component {

    render(){
      return (
        <div class="ui input">
            <input type="text-area" value={this.props.show}
                   onChange={this.props.onChangeHandler} 
                   id="to_do_input"/>
        </div>
      )
    }
}


