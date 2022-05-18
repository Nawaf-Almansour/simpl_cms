import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './index.css';
import "typeface-raleway"
import reportWebVitals from './reportWebVitals';
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notfound";
import Post from "./pages/post";

ReactDOM.render(
      <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/404" component={NotFound} />
          <Route exact path="/post/:id" render={props => <Post {...props} />} />
      </div>
      </Router>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
