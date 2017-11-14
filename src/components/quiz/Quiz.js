import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import QuestionsList from './QuestionsList';

class Quiz extends Component {

  render() {
    const { quiz, handleSubmit } = this.props;
    return (
      <div>
        <QuestionsList questions={ quiz }/>
        <br/>
        <RaisedButton
          label="Submit"
          primary={true}
          onClick={(event) => handleSubmit(this.state)}/>
      </div>
    );
  }
}

Quiz = reduxForm({form: 'quiz'})(Quiz);

export default Quiz;
