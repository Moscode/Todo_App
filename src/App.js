import React, { Component } from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
            userName: "Firebase",
            todoItems: [{action: "Study maths", done: false},
                        {action: "Study maths", done: false},
                        {action: "Study maths", done: false},
                        {action: "Study maths", done: false}
           ],
           newTodo: ""
    }
  }

//Adding the text to a property
  updateNewTodo = (event) => {
    this.setState({newTodo: event.target.value});
  }

//Adding the newTodo content to the todoItems
  updateTodoItems = () => {
    if(!this.state.todoItems.find((newText) => 
      newText.action === this.state.newTodo
    )){
      this.setState({
                    todoITems: [...this.state.todoItems, {action:this.state.newTodo, done:false}],
                    newTodo: ""
                  }
        )
    }
  }

  changeStateData = () =>{
    this.setState({
      userName: this.state.userName === "Firebase" ? "Google Cloud":"Firebase"
    });
  }

  render(){
    return(
        <div>
          <h1 className='bg-primary text-white text-center'>
            {`Powered By ${this.state.userName}`}
          </h1>
          <button className="btn btn-primary m-2"
          onClick={ this.changeStateData }
          >
            Change Data
          </button>
        </div>
    )
  }
}

