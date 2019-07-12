import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = e => {
        e.preventDefault()
        /* save username and password to localStorage? */
        
        /* add login function passed down */
    }

    handleTextChange = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>

                <input
                    type='text'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleTextChange}
                    placeholder='Username'
                />
                <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleTextChange}
                    placeholder='Password'
                />
                <button>Login</button>

            </form>
        )
    }
}

export default LoginForm;