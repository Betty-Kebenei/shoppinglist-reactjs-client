import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default (ComposedComponent) => {
  class Auth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/auth/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/auth/login');
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

  return connect(mapStateToProps)(Auth);

}