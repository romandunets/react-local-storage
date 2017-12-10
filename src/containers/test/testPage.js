import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import * as testActions from '../../actions/testActions'

class TestPage extends Component {

  handleTest() {
    this.props.actions.testLocalStorage();
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <div className="text-center" >
              <FlatButton label="Test it!" fullWidth={true} onClick={this.handleTest.bind(this)}/>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.test.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(testActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
