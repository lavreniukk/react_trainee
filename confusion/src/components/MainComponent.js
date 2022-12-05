import { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Routes, Route, Navigate, useParams} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }
    
    render() {
      const HomePage = () => {
        return(
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
        );
      }

      const DishWithId = () => {
        var {dishId} = useParams();

        return(
            <DishDetail
             dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
             comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
        );
      }

      return (
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/aboutus" element={<About leaders={this.state.leaders}/>}/>
            <Route exact path="/menu" element={<Menu dishes={this.state.dishes}/>}/>
            <Route path='/menu/:dishId' element={<DishWithId/>}/>
            <Route exact path='/contactus' element={<Contact/>}/>
            <Route path="*" element={<Navigate to="/home" replace/>}/>
          </Routes>
          <Footer/>
        </div>
    );
  }
}

export default Main;