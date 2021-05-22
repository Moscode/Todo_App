import React from "react"

export class TodoBanner extends React.Component{
    render = () =>
            <h1 className='bg-primary text-white text-center'>
            {`Powered By ${this.props.userName}(${this.props.tasks.filter(eachTodo => !eachTodo.done).length} items to complete)`}
          </h1>
}