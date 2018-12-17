import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class Books extends React.Component {
    
    constructor(props){
    super(props);
    this.state={
      items: [],
      isLoaded: false,
    }
  }
  
  componentDidMount(){
    
    fetch('https://info-exchange-app-jackalack117.c9users.io/apibooks/')
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
    return ( <div className="App">
        
            
        
            <books>
            <ul>
              {items.map(item => (
                <li key={item.id}>
                   <a href="#"><Link to="/">{item.name}</Link></a>
                </li>
                ))}
            </ul></books>
            
          </div>

        );
  }
}
}
