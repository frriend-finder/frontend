import React, { Component } from 'react';

import '../styles/Signup.css';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewUserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            birthday: '',
            email: '',
            gender: '',
            phone: '',
            picture: '', // Must be valid URL for now
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
        /* This is just to see the state after
        someone fills out the form. Needs to be replaced
        with the actual AddUser function */
        console.log(this.state)
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
                    <Col md={6}>
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
                    <Col md={6}>
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
                </Row>
                
                <FormGroup>
                    <Label>Birthday</Label>
                    <Input
                        type='date'
                        name='birthday'
                        value={this.state.birthday}
                        onChange={this.handleTextChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Gender</Label>
                    <Input
                        type='text'
                        name='gender'
                        value={this.state.gender}
                        onChange={this.handleTextChange}
                    />
                    {/* Didn't know how to get Input type='select' to work */}

                    {/* <Input type='select' name='gender'>
                        <option>Select...</option>
                        <option onChange={() => console.log('male')}>Male</option>
                        <option onChange={() => console.log('female')}>Female</option>
                    </Input> */}
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
                        name='picture'
                        value={this.state.picture}
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
                    <Input
                        type='text'
                        name='interests'
                        value={this.state.interests}
                        onChange={this.handleTextChange}
                    />
                    {/* Didn't know how to get Input type='select' to work */}

                    {/* <Input type='select' name='interests' multiple>
                        <option>Select...</option>
                        <option onChange={() => console.log('male')}>Male</option>
                        <option onChange={() => console.log('female')}>Female</option>
                    </Input> */}
                </FormGroup>

                <Button color='primary'>Submit</Button>
            </Form>
        )
    }
}

export default NewUserForm;