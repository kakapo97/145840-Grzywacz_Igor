import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Posts from './Posts/Posts'
import Post from './Posts/Post'
import User from './User'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        <Route path="/posts/user/:id" component={User} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
}

export default App;
