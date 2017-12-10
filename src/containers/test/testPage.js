import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import * as testActions from '../../actions/testActions'

class TestPage extends Component {

  handleTest() {
    this.props.actions.testLocalStorage();
  }

  render() {
    const { results } = this.props;
    if (results !== undefined)
    console.log(results);

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <div className="text-center" >
              <FlatButton label="Test it!" fullWidth={true} onClick={this.handleTest.bind(this)}/>
              {results.length > 0 && results.map(result =>
                <div key={results.indexOf(result)}>
                  <h2>{result.description}</h2>
                  <Table selectable={false}>
                    <TableHeader displaySelectAll={false}>
                      <TableRow>
                        <TableHeaderColumn>Number of blocks</TableHeaderColumn>
                        {result.headers.map(numberOfBytes =>
                          <TableHeaderColumn key={result.headers.indexOf(numberOfBytes)}>{numberOfBytes} bytes</TableHeaderColumn>
                        )}
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                      {result.data.map(valuesPerNumberOfBlocks =>
                        <TableRow key={result.data.indexOf(valuesPerNumberOfBlocks)}>
                          <TableRowColumn>{result.columns[result.data.indexOf(valuesPerNumberOfBlocks)]}</TableRowColumn>
                          {valuesPerNumberOfBlocks.map(value =>
                            <TableRowColumn key={result.data.indexOf(value)}>{value} ms</TableRowColumn>
                          )}
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.test.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(testActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
