import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/authActions';
import QuizForm from '../../components/quiz/Quiz';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class QuizPage extends Component {
  handleLogin(credentials) {
    this.props.actions.login(credentials);
  }

  render() {
    const { message } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div>
            {/* <AppBar title="Login" /> */}
            <div className="text-center" >
              <h1>Quiz Page</h1>
              <QuizForm handleLogin={ this.handleLogin.bind(this) } />
              <FlatButton label="Signup" primary={true} href="/signup" />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapDispatchToProps)(QuizPage);