import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginBottom: 16,
    textAlign: 'left'
  }
};

const Question = ({ question }) => (
  <div>
    <h3>{question.QuestionText}</h3>
    <RadioButtonGroup name={question.QuestionText} defaultSelected={question.Choices[0].Id}>
      {question.Choices.map(answer => <RadioButton key={answer.Id} label={answer.AnswerText}
        value={answer.Id} style={styles.radioButton}/>)}
    </RadioButtonGroup>
  </div>
)

Question.propTypes = {
  question: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    QuestionText: PropTypes.string.isRequired,
    Choices: PropTypes.array.isRequired
  }).isRequired
}

export default Question;
