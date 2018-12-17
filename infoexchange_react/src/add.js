import * as React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <form>
          <ul>
          
              <label>
                Book Title:
                <input type="text" name="title" />
              </label>
              
              <label>
                ISBN:
                <input type="text" name="isbn" />
              </label>
              
              <label>
                Author:
                <input type="text" name="author" />
              </label>
              
            <input type="submit" value="Submit" />
            
          </ul>
      </form>
    );
  }
}

