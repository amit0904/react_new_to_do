import React from 'react'

function TODOLIST(props){
    return(
    <div class="ui segment row">
        <div class="ui left aligned column">
            <div id="list" class="ui vertical fluid menu">
                    {props.itemsList.map((item,index) => toDoCheckBox(item,index))}
            </div>
        </div>
    </div>
    )
}

function toDoCheckBox(item,index) {
    return (
        <div class="item">
            <div class="ui checkbox">
                <input data-index={index} type="checkbox"/>
                <label>{item}</label>
            </div>
        </div>)
  }

export default TODOLIST
