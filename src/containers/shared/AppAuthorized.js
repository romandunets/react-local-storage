import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as authActions from '../../actions/authActions'

class AppAuthorized extends Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.actions.logout();
  }

  render() {
    return (
      <div>
        <div>
          <MuiThemeProvider>
            <div>
              <AppBar title="Courses" />
            </div>
          </MuiThemeProvider>
          {/* <h2>React + Redux Skeleton</h2>
          <Link href="" onClick={this.handleLogout.bind(this)}>Logout</Link> */}
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AppAuthorized);
