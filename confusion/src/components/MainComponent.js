import Menu from './MenuComponent';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            seelctedDish: null
        };
    }
    
    OnDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    };

    render() {
      return (
        <div className="App">
          <Header/>
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.OnDishSelect(dishId)}/>
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
          <Footer/>
        </div>
    );
  }
}
  

export default Main;