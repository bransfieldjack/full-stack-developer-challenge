import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Books = () => <h2>Books</h2>;
const Authors = () => <h2>Authors</h2>;
const Add = () => <h2>Add</h2>;


export default class Layout extends React.Component {
  render() {
    return (
              
                <layout>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <a class="navbar-brand" href=""><Link to="/">Books</Link></a>
                      <a class="navbar-brand" href=""><Link to="/about/">Authors</Link></a>
                      <a class="navbar-brand" href=""><Link to="/users/">Add</Link></a>
                    </nav>
                    
                    <Route path="/" exact component={Books} />
                    <Route path="/about/" component={Authors} />
                    <Route path="/users/" component={Add} />
                </layout>
              

    );
  }
}
