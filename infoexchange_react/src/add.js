import * as React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <form>
          <ul>
            <li>
              <label>
                Book Title:
                <input type="text" name="title" />
              </label>
            </li>
            <li>
              <label>
                ISBN:
                <input type="text" name="isbn" />
              </label>
            </li>
            <li>
              <label>
                Author:
                <input type="text" name="author" />
              </label>
            </li>  
            <input type="submit" value="Submit" />
            
          </ul>
      </form>
    );
  }
}

