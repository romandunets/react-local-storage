import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import QuestionsList from './QuestionsList';

const questions = [
  {
    id: 1,
    question: 'First Question, What is the meaning of life?',
    MCA: ['answer 1', 'answer 2', 'answer 3', 'answer 4']
  }, {
    id: 2,
    question: 'What is the meaning of life for real?',
    MCA: ['answer 1', 'answer 2', 'answer 3', 'answer 4']
  }, {
    id: 3,
    question: 'Ok, how do you like the winter?',
    MCA: ['answer 1', 'answer 2', 'answer 3', 'answer 4']
  }
];

class QuizForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questions
    }
  }

  render() {
    const {handleLogin} = this.props;
    return (
      <div>
        <QuestionsList questions={this.state.questions}/>
        <br/>
        <RaisedButton
          label="Login"
          primary={true}
          onClick={(event) => handleLogin(this.state)}/>
      </div>
    );
  }
}

QuizForm = reduxForm({form: 'quiz'})(QuizForm);

export default QuizForm;
