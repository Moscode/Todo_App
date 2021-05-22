import React from "react"

export class TodoRow extends React.Component{
    render = () => 
    <tr>
    <td>{this.props.item.action}</td>
    <td>
      <input type="checkbox" checked={ this.props.item.done } 
          onChange = {() => this.props.callback(this.props.item)} />
    </td>
  </tr>
    
}