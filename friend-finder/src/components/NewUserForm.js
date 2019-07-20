import React, { Component } from 'react';

// import dependencies
import { connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// import actions
import { addNewUser } from '../actions';

// import styling
import '../styles/Signup.css';

class NewUserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            gender: '',
            phone: '',
            imageUrl: '', // Must be valid URL for now
            address: '',
            city: '',
            state: '',
            zip: '',
            interests: [],
            catchPhrase: ''
        }
    }

    handleAddUser = e => {
        e.preventDefault()
        this.props.addNewUser(this.state)
    }

    handleGenderSelect = e => {
        e.preventDefault()
        for (let _ = 0; _ < e.target.length; _++) {
            if (e.target[_].selected === true) {
                this.setState({ gender: e.target[_].innerHTML })
            }
        }
    }

    handleInterestSelect = e => {
        e.preventDefault()
        let selectedInterests = []
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].selected === true) {
                selectedInterests.push(e.target[i].innerHTML)
            }
        }
        this.setState({ interests: selectedInterests })
    }

    handleTextChange = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Form className='signup-form' onSubmit={this.handleAddUser}>

                <h2>Sign Up!</h2>

                <Row form>
                    <Col md={5}>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input
                                type='text'
                                name='firstName'
                                value={this.state.firstName}
                                onChange={this.handleTextChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                                type='text'
                                name='lastName'
                                value={this.state.lastName}
                                onChange={this.handleTextChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label>Age</Label>
                            <Input
                                type='text'
                                name='age'
                                value={this.state.age}
                                onChange={this.handleTextChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <Label>Gender</Label>
                    <Input type='select' name='gender' onChange={(e) => this.handleGenderSelect(e)}>
                        <option>Select...</option>
                        <option>Male</option>
                        <option>Female</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>E-mail Address</Label>
                    <Input
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleTextChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                        type='text'
                        name='phone'
                        value={this.state.phone}
                        onChange={this.handleTextChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Profile Pic URL</Label>
                    <Input
                        type='url'
                        name='imageUrl'
                        value={this.state.imageUrl}
                        onChange={this.handleTextChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Catch Phrase!</Label>
                    <Input
                        type='text'
                        name='catchPhrase'
                        value={this.state.catchPhrase}
                        onChange={this.handleTextChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Address</Label>
                    <Input
                        type='text'
                        name='address'
                        value={this.state.address}
                        onChange={this.handleTextChange}
                    />
                </FormGroup>

                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>City</Label>
                            <Input
                                type='text'
                                name='city'
                                value={this.state.city}
                                onChange={this.handleTextChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>State</Label>
                            <Input
                                type='text'
                                name='state'
                                value={this.state.state}
                                onChange={this.handleTextChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label>ZIP</Label>
                            <Input
                                type='text'
                                name='zip'
                                value={this.state.zip}
                                onChange={this.handleTextChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <Label>Interests</Label>
                    <Input type='select' name='interests' multiple onChange={this.handleInterestSelect}>
                        <option>Art</option>
                        <option>Cooking</option>
                        <option>Dancing</option>
                        <option>Food</option>
                        <option>Health/Exercise</option>
                        <option>Movies</option>
                        <option>Music</option>
                        <option>Pets</option>
                        <option>Photography</option>
                        <option>Politics</option>
                        <option>Shopping</option>
                        <option>Sports</option>
                        <option>Travel</option>
                    </Input>
                </FormGroup>

                <Button color='primary'>Submit</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    addingNewUser: state.addingNewUser,
    error: state.error
})

export default connect(
    mapStateToProps,
    { addNewUser }
)(NewUserForm);