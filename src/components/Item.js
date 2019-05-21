import React, { Component } from 'react';
import { observer } from 'mobx-react'
import '../App.css'

@observer
class Item extends Component {
  checkItem = () => {
    this.props.store.checkItem(this.props.item.name)
  }
  editItem = () => {
    let location = prompt("Edit location")
    this.props.store.editItem(this.props.item.name, location)
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  
  render() {
    return (
      <div className={this.props.item.completed ? "closed" : null}>

        <input type="checkbox" value={this.props.item.name} onClick={this.checkItem}/>
        {this.props.item.name} - {this.props.item.location}

        <button className="edit" onClick={this.editItem}>Edit</button>
        <button onClick={this.deleteItem}>Delete</button>
        {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */}
      </div>)
  }
}

export default Item