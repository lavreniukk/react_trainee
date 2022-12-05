import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({selectedDish}) {
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

function RenderComments({commentsArr}) {
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

function DishDetail(props) {
    if (props.dish != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'> Menu </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3> {props.dish.name} </h3>
                        <hr/>
                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-md-5 m-1 p-0'>
                        <RenderDish selectedDish={props.dish}/>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderComments commentsArr={props.comments}/>
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

export default DishDetail;