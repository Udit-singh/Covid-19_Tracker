import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Covid-19 Tracker</NavbarBrand>
        </div>
      </Navbar>
    </div>
    )
  }
}


export default App;
