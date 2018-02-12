import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default (ComposedComponent) => {
  class NotAuth extends Component {

    // A component that always redirects the user to the 
    // dashboard as long as the user is logged in.
    // With this, a user can never access the login or
    // registration page while still logged in.   
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    const { authenticated } = state.user;
    return { authenticated };
  }

  return connect(mapStateToProps)(NotAuth);

}