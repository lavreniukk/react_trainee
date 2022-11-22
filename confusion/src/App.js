import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' className=''>
        <div className='container'>
          <NavbarBrand className='float-left' href="/">
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
