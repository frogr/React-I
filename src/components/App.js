/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import ToDoList from './toDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoInput: '',
      toDoList: []
    };
    this.handleToDo = this.handleToDo.bind(this);
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }
  handleToDo (event) {
    this.setState({ toDoInput: event.target.value });
  }
  handleAddToDo() {
    // this.state.toDoList.push(this.state.toDoInput);
    let input = this.state.toDoInput;
    const toDoList = this.state.toDoList;
    this.state.toDoList.push(this.state.toDoInput);
    this.setState({ toDoList, toDoInput: '' });
  }
  render() {
    return (
      <ToDoList
        changeHandler = {this.handleToDo}
        addToDo = {this.handleAddToDo}
        toDoInput = {this.state.toDoInput}
        toDoList = {this.state.toDoList}
      />
    )
  }
}
export default App;
