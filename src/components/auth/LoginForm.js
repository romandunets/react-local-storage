import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:""
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <TextField
          hintText="Enter your Username"
          floatingLabelText="Username"
          onChange = {(event,newValue) => this.setState({username:newValue})} />
        <br/>
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange = {(event,newValue) => this.setState({password:newValue})} />
        <br/>
        <RaisedButton label="Submit" primary={true} style={style} onClick={handleSubmit}/>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
