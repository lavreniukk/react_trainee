import { Component } from 'react';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Routes, Route, Navigate} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
        };
    }
    
    render() {
      const HomePage = () => {
        return(
          <Home/>
        );
      }

      return (
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route exact path="/menu" element={<Menu dishes={this.state.dishes}/>}/>
            <Route path="*" element={<Navigate to="/home" replace/>}/>
          </Routes>
          <Footer/>
        </div>
    );
  }
}

export default Main;