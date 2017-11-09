import React, { Component, PropTypes } from 'react';
import { Table, TableBody } from 'material-ui/Table';
import QuizListItem from './QuizListItem';

class QuizesList extends Component {

  render() {
    const { quizes } = this.props;
    return (
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          {quizes.map(quiz => <QuizListItem key={quiz.id} quiz={quiz} />)}
        </TableBody>
      </Table>
    );
  }
}

QuizesList.propTypes = {
  quizes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default QuizesList;
