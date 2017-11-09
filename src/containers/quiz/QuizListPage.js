import React, { Component, PropTypes } from 'react';
import QuizesList from '../../components/quiz/QuizesList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const quizes = [
  {
    id: 1,
    name: '.NET'
  }, {
    id: 2,
    name: 'Ruby on Rails'
  }, {
    id: 3,
    name: 'Java EE'
  }
];

class QuizListPage extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <QuizesList quizes={quizes} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default QuizListPage;
