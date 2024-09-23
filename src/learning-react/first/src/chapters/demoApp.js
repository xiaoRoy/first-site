import { Component } from "react";

import displayTodoList from "./chap5/todoListMultipleComponents";
import showToDoList from "./chap5/todoListWithFilter";

class DemoApp extends Component {
  render() {
    // return showToDoList();
    return displayTodoList();
  }
}

export default DemoApp;
