import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';

class App extends Component {
  public render() {
    return (
      <Router>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/blog/:id" component={BlogPage} />
      </Router>
    );
  }
}

export default App;
