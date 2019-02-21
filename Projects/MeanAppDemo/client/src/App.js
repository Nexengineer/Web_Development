import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux'; //------> This method is used for binding redux with react app

import store from './store'; //----------> This is a generic store file which we can use for anything
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <ShoppingList />
        </div>
      </Provider>

    );
  }
}

export default App;
