import React, { Component } from 'react';
import '@material-ui/core/TextField'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
            
    }
  }

  render(){
    return(
        <div>
          <h1 className='bg-primary text-white text-center'>TodoAPP with Firebase</h1>
          <TextField id="standard-basic" label="Enter Your Task" />
        </div>
    )
  }
}

