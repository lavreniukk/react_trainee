import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    
    renderDish(selectedDish) {
        if (selectedDish != null) {
            return(
                <Card>
                    <CardImg object src={selectedDish.image} alt={selectedDish.name}/>
                    <CardBody>
                        <CardTitle tag="h4"> {selectedDish.name} </CardTitle>
                        <CardText>
                            {selectedDish.description}
                        </CardText>
                    </CardBody>
                </Card> 
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(commentsArr) {
        if (commentsArr != null) {
            var comms = commentsArr.map((comm) => {
                return(
                    <li key={comm.id}>
                        <p> {comm.comment} </p>
                        <p> -- {comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comm.date)))}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h4> Comments </h4>
                    <ul class="list-unstyled">
                        {comms}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
        ); 
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;