import React, { Component } from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
            firname: "Moses",
            lastname: "Odun"
    }
  }

  render(){
    return(
        <div>
          <h1 className='bg-primary text-white text-center'>Investomatch</h1>
        </div>
    )
  }
}

