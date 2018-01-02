/*
    ./client/components/App.jsx
*/
import React from 'react';
import Welcome from './Welcome.jsx';
import RegistrationForm from './RegistrationForm';
// import Navbar from './Navbar.jsx';
// import Footer from './Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
        <div style={{textAlign: 'center'}}>
            <Welcome />
            <RegistrationForm />
        </div>);
  }
}