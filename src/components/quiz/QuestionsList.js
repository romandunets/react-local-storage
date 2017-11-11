import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Question from './Question';

const QuestionsList = ({ questions }) => {
  return (
    <ul>{questions.map(question => <Question key={question.Id} question={question} />)}</ul>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number.isRequired,
      QuestionText: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default QuestionsList;
