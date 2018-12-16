import React, { Component } from 'react';


class App extends Component {
  
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
      return (
        <div className="App">
        
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <h3> Name: </h3> {item.name} 
              </li>
              ))}
          </ul>
          
        </div>
        );
    }
    
  }
}

export default App;
