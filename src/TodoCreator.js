import React from "react";

export class TodoCreator extends React{
    constructor(props){
        super(props);
        this.state = { newTodo: "" } 
    }

    //Adding the text to a property
    updateNewTodo = (event) => {
        this.setState({newTodo: event.target.value});
    }

    //
    createNewTodo = () => {
        this.props.callback(this.state.newTodo);
        this.setState({newTodo: ""});
    }

    render = () => 
        <div className="my-1">
            <input className="form-control" 
             value={ this.state.newTodo }
             onChange={ this.updateNewTodo } />
            <button className="btn btn-primary mt-1"
             onClick={this.createNewTodo}>Add</button>
        </div>
}