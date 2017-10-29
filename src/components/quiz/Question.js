import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginBottom: 16,
    textAlign: 'left',
  },
};

const Question = ({ question }) => (
  <div>
    <h3 >{question.question}</h3>    
    <RadioButtonGroup name={question.question} defaultSelected={question.MCA[0]}>
      {question.MCA.map(answer => <RadioButton key={answer} label={answer} 
        value={answer} style={styles.radioButton}/>)}
    </RadioButtonGroup>
  </div>
)

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    MCA: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}


export default Question;
