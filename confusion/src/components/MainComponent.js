import Menu from './MenuComponent';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';

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
          <Navbar dark color='primary'>
            <div className='container'>
              <NavbarBrand className='float-start' href="/">
                Ristorante Con Fusion
              </NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.OnDishSelect(dishId)}/>
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
    );
  }
}
  

export default Main;