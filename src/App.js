import React, { Component } from 'react';
import logo from './logo.svg';
import LoginMod from './components/auth/Login'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <LoginMod></LoginMod>

                </header>
            </div>
        );
    }
}

export default App;
