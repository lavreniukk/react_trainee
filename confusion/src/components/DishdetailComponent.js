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
                        <p> -- {comm.author}, {comm.date} </p>
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
        if (this.props.selectedDish != null) {
            return (
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(this.props.selectedDish.comments)}
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