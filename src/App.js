import React, { Component } from 'react';
import './App.css';
import PostsList from './components/PostsList/PostsList';
import ReviewPost from './components/ReviewPost/ReviewPost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router >
          <Switch>
            <Route exact path="/" component={PostsList}></Route>
            <Route path="/:id" component={ReviewPost}></Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
