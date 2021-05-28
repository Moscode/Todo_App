import React, { Component } from 'react';
import { TodoBanner } from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";
import {Visibility } from "./VisibilityControl"
export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
            userName: "Firebase",
            todoItems: [{action: "Study Maths", done: false},
                        {action: "Study Physics", done: false},
                        {action: "Study Nodejs", done: false},
                        {action: "Study Shell Scripting", done: false}
           ],
           //newTodo: ""
    }
  }

//Adding the text to a property
  updateNewTodo = (event) => {
    this.setState({newTodo: event.target.value});
  }

//Adding the newTodo content to the todoItems
  updateTodoItems = (task) => {
    if(!this.state.todoItems.find(newText => 
      newText.action === task
    )){
      this.setState({
                    todoItems: [...this.state.todoItems, {action:task, done:false}]
                  }
        )
    }
  }

  //Creating the toggle for completed or not.
  isCompleted = (todo) =>
    this.setState({todoItems: this.state.todoItems.map(
      item => item.action === todo.action ? {...item, done: !item.done} : item)
    })

  //Table row displaying the data
  tableRowData = () => 
    this.state.todoItems.map(item => 
      <TodoRow key={ item.action } item={ item } callback ={ this.isCompleted } /> )
       /* <td>{item.action}</td>
        <td>
          <input type="checkbox" checked={ item.done } 
              onChange = {() => this.isCompleted(item)} />
        </td>
      </tr>) */

  render = () =>
        /*<div>
          <h1 className='bg-primary text-white text-center'>
            {`Powered By ${this.state.userName}(${this.state.todoItems.filter(eachTodo => !eachTodo.done).length} items to complete)`}
          </h1>

          <div className="container-fluid">
          <div className="my-2">
          <input className="form-control"
           value= {this.state.newTodo}
           onChange={this.updateNewTodo} />
          <button className="btn btn-primary mt-1" onClick={this.updateTodoItems}>Add</button>
          </div> */
          <div>
          <TodoBanner name={ this.state.userName } tasks={ this.state.todoItems} />
          <div className = "container-fluid">
          <TodoCreator callback = {this.createNewTodo} />
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th><th>Done</th>
              </tr>
            </thead>
            <tbody>{ this.tableRowData() }</tbody>
          </table>
          </div>
        </div>
}

