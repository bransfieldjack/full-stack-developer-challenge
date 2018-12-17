import * as React from "react";
import Books from  '../src/books.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class BookDetails extends React.Component {
    
    constructor(props){
    super(props);
    this.state={
      items: [],
      isLoaded: false,
    }
  }
  
  componentDidMount(){
    
    const { handle } = this.props.match.params
    
    fetch('https://info-exchange-app-jackalack117.c9users.io/apibooks/${handle}')
      .then(res => res.json()) 
      .then(json => {
        this.setState({
          isLoaded: true, 
          items: json, 
        })
      });
    
  }
  

    render() {
        var { isLoaded, items } = this.state;
    
    if(!isLoaded){
      return <div>Loading... </div>;
    }
    
    else{
    return ( <div className="BookDetails">
  
            <ul>
              {items.map(item => (
                <li key={item.id}>
                   <a href="#">{this.item.isbn}</a>
                   <a href="#">{this.item.name}</a>
                   <a href="#">{this.item.author}</a>
                </li>
                ))}
            </ul>
            
          </div>

        );
  }
}
}

