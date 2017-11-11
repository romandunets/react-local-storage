import React, { Component, PropTypes } from 'react';
import { Table, TableBody } from 'material-ui/Table';
import QuizListItem from './QuizListItem';

class QuizesList extends Component {

  render() {
    const { quizes } = this.props;
    return (
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          {quizes.map(quiz => <QuizListItem key={quiz.Id} quiz={quiz} />)}
        </TableBody>
      </Table>
    );
  }
}

QuizesList.propTypes = {
  quizes: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default QuizesList;
