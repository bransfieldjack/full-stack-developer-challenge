import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class Authors extends React.Component {
    
    constructor(props){
    super(props);
    this.state={
      items: [],
      isLoaded: false,
    }
  }
  
  componentDidMount(){
    
    fetch('http://info-exchange-app-jackalack117.c9users.io/apiauthor/')
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
    return ( <div className="AuthorApp">
        
            
        
            <books><ul>
              {items.map(item => (
                <li key={item.id}>
                   <a href="#">{item.last_name}</a>
                </li>
                ))}
            </ul></books>
            
          </div>

        );
  }
}
}

