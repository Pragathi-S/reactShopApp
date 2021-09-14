import React, { Component } from "react";
import Shop from "./shop.js";
import "./style.shop.css";

class App extends Component {
    render() {
      console.log("App Component Loaded");
      return (
        <Shop/>
      );
    }
  }
  
  export default App;
  