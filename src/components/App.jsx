/*
    ./client/components/App.jsx
*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import Welcome from './Welcome.jsx';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
export default class App extends React.Component {
  render() {
    return (
        <div style={{textAlign: 'center'}}>
            <Welcome />
            <RegistrationForm /> 
            <LoginForm />
        </div>);
  }
}