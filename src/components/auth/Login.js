import React, { Component } from 'react';
import classes from './Login.css';

function post (path, data) {
    console.log(data);
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

function handleLoginClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');

    const Login = document.querySelector('.Login');
    const username = Login.querySelector('.username').value;
    const password = Login.querySelector('.password').value;
    post('/login', { username, password })
        .then(({ status }) => {
            if (status === 200) alert('login success')
            else alert('login failed')
        })
}

function handleSignupClick(e) {
    e.preventDefault();
    console.log('The link was clicked sign up.');

    const CreateUser = document.querySelector('.CreateUser')
    const username = CreateUser.querySelector('.username').value;
    const password = CreateUser.querySelector('.password').value;
    post('/createUser', { username, password })
}


class Login extends Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <form className="Login">
                    <h1>Login</h1>
                    <input type="text" className="username" placeholder="username"/>
                    <input type="password" className="password" placeholder="password"/>
                    <input  type="submit" value="Login" onClick={handleLoginClick}/>
                </form>
                <form className="CreateUser">
                    <h1>Create account</h1>
                    <input type="text" className="username" placeholder="username"/>
                    <input type="password" className="password" placeholder="password"/>
                    <input type="submit" value="Create" onClick={handleSignupClick}/>
                </form>
            </div>
        );
    }

}
export default Login;
