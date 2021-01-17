
import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pathname: "/",
    };

    this.namePath = this.namePath.bind(this);
  }

  namePath(pathname) {
    this.setState({
      pathname: pathname,
    });
  }


  render() {

    return (
      <Router>

        <div className="App">

          <Nav
            namePath={this.namePath}
            pathname={this.state.pathname}
          />

          <Switch>
            <Route
              path="/login"
              exact
              component={<Login />}
            />
            {/* <Route
              path="/"
              exact
              component={}
            />
            <Route
              path="/"
              exact
              component={}
            /> */}

          </Switch>



        </div>
      </Router >

    )
  }
}

export default App;
