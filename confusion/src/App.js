import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  render () {
      return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand className='float-start' href="/">
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
}
  

export default App;
