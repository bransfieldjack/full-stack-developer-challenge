import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Books from  '../src/books.js';
import Authors from  '../src/authors.js';
import Add from '../src/add.js';


class App extends Component {
  
  render() {
      return (
          
          <Router>
            <div className="App">
              
                      <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href=""><Link to="/">Books</Link></a>
                        <a class="navbar-brand" href=""><Link to="/about/">Authors</Link></a>
                        <a class="navbar-brand" href=""><Link to="/users/">Add</Link></a>
                      </nav>
                      
                      <Route path="/" exact component={Books} />
                      <Route path="/about/" component={Authors} />
                      <Route path="/users/" component={Add} />
              
            </div>
          </Router>
        );
    }
    
  }

export default App;
