import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

import '../styles/Login.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleLogin = e => {
        e.preventDefault()
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push('/userlanding'));
    }

    handleTextChange = e => {
        e.preventDefault()
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <Form className='login-form' onSubmit={this.handleLogin}>

                <h2>Login</h2>

                <FormGroup>
                    <Label>Username</Label>
                    <Input
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleTextChange}
                        placeholder=''
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleTextChange}
                        placeholder=''
                    />
                </FormGroup>
                
                <Button color='primary'>Login</Button>

            </Form>
        )
    }
}

export default connect(
    null,
    { login }
)(LoginForm);