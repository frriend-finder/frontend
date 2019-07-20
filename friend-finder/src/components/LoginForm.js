import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login, sendCode } from '../actions';

import '../styles/Login.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            creds: ''
        }
    }

    handleLogin = e => {
        e.preventDefault()
        this.props
            .login(this.state.email, this.state.creds)
            .then(() => this.props.history.push('/userhomepage'));
    }

    handleSendCode = e => {
        e.preventDefault()
        this.props
            .sendCode(this.state.email)
    }

    handleTextChange = e => {
        e.preventDefault()
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Form className='login-form' onSubmit={this.handleLogin}>

                <h2>Login</h2>

                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleTextChange}
                        placeholder=''
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Code</Label>
                    <Input
                        type='password'
                        name='creds'
                        value={this.state.creds}
                        onChange={this.handleTextChange}
                        placeholder=''
                    />
                </FormGroup>
                
                <Button color='danger' onClick={this.handleSendCode}>Send Code</Button>
                <Button color='primary' onClick={this.handleLogin}>Login</Button>

            </Form>
        )
    }
}

export default connect(
    null,
    { login, sendCode }
)(LoginForm);