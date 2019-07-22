import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login, sendCode } from '../actions';

import '../styles/Login.css';

import { TabContent, TabPane, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            creds: '',
            activeTab: '1'
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
            .then(this.setState({activeTab: '2'}))
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
            <Form className='login-form'>

                <h2>Login</h2>

                <TabContent activeTab={this.state.activeTab}>

                    <TabPane tabId="1">
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleTextChange}
                                placeholder=''
                            />
                        </FormGroup>
                    </TabPane>

                    <TabPane tabId="2">
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
                    </TabPane>

                    <Button color='primary' type='submit' onClick={(e) => {
                        if (this.state.activeTab === '1') {
                            this.handleSendCode(e)
                        } else {
                            this.handleLogin(e)
                        }
                    }}>{`${this.state.activeTab === '1' ? 'Send Code' : 'Login'}`}</Button>

                </TabContent>

            </Form>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    code: state.code
})

export default connect(
    mapStateToProps,
    { login, sendCode }
)(LoginForm);