import React from 'react';
export default (props) => {
             return(
               // <button onClick = {(e) => {console.log("inside button")} } class="ui primary button" id="commit_to_do">COMMIT</button>
             <button onClick={props.onClickHandler} class="ui primary button" id="commit_to_do">COMMIT</button>
                );
                    }
