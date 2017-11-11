import React, { Component, PropTypes } from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { browserHistory } from 'react-router';

class QuizListItem extends Component {

  onCellClick(quiz) {
    browserHistory.push(`/quizes/${quiz.Id}`);
  }

  render() {
    const { quiz } = this.props;
    return (
      <TableRow id={quiz.Id} onClick={ this.onCellClick.bind(this, quiz) }>
        <TableRowColumn>{quiz.Name}</TableRowColumn>
      </TableRow>
    );
  }
}

QuizListItem.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default QuizListItem;
