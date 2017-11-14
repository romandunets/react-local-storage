import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as quizActions from '../../actions/quizActions'
import QuizesList from '../../components/quiz/QuizesList'

class QuizListPage extends Component {

  componentWillMount() {
    this.props.actions.listQuizes();
  }

  render() {
    const { quizes } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <QuizesList quizes={quizes} />
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizes: state.quizes.quizes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(quizActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizListPage);
