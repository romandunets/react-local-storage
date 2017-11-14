import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import * as quizActions from '../../actions/quizActions'
import Quiz from '../../components/quiz/Quiz';

class QuizPage extends Component {

  componentWillMount() {
    this.props.actions.getQuiz(this.props.params.id);
  }

  handleSubmit(credentials) {
    // TODO: submit quiz
  }

  render() {
    const { quiz } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div>
            {/* <AppBar title="Login" /> */}
            <div className="text-center" >
              <h1>Quiz Page</h1>
              <Quiz quiz={ quiz } handleSubmit={ this.handleSubmit.bind(this) } />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quizes.quiz
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(quizActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
