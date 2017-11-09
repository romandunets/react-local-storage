import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Question from './Question';

const QuestionsList = ({ questions }) => {
  return (
    <ul>{questions.map(question => <Question key={question.id} question={question} />)}</ul>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      MCA: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  ).isRequired
}

export default QuestionsList;
