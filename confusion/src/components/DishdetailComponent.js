import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Button, Modal, Label, Col, Row, ModalHeader, ModalBody} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (value) => value && value.length;
const minLength = (length) => (value) => (value) && (value.length >= length); 
const maxLength = (length) => (value) => !(value) || (value.length <= length);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isCommentOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isCommentOpen: !this.state.isCommentOpen
        });
    }

    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return(
            <>
            <Button outline onClick={this.toggleModal}>
                <span className='fa fa-pencil fa-lg'></span> 
                <strong>Submit Comment</strong>
            </Button>
            <Modal isOpen={this.state.isCommentOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                       <Row className='form-group mb-2'>
                            <Label htmlFor='rating'> Rating </Label>
                            <Col>
                                <Control.select model='.rating' id='rating' name='rating'
                                className='form-control'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>

                        <Row className='form-group mb-2'>
                            <Label htmlFor='name'> Your Name </Label>
                            <Col>
                                <Control.text model='.name' name='name'
                                className='form-control'
                                placeholder='Your Name'
                                validators={{
                                    required,
                                    minLength: minLength(3),
                                    maxLength: maxLength(15)
                                }}/>
                                <Errors className='text-danger' model='.name' show='touched'
                                messages={{
                                    required: 'Required! ',
                                    minLength: 'Must be greater than 3 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}/>
                            </Col>
                        </Row>

                        <Row className='form-group mb-2'>
                            <Label htmlFor='comment'> Comment </Label>
                            <Col>
                                <Control.textarea model='.comment' name='comment'
                                className='form-control' rows='6'/>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col md={12}>
                                <Button type='submit' color='primary'>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </>
            
        );
    }
}

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

function RenderComments({commentsArr, addComment, dishId}) {
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
                <CommentForm dishId={dishId} addComment={addComment}/>
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
                        <RenderComments commentsArr={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}/>
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