import * as React from 'react';
import './App.css';

import FormModel from './shared-ui/Forms/FormModel';
import NumberValidator from './shared-ui/Forms/Validators/NumberValidator';
import TextField from './shared-ui/Forms/Elements/TextField';

const logo = require('./logo.svg');
interface AppState {
  myForm: FormModel;
}
class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.setState({
      myForm: new FormModel()
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> 
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TextField form={this.state.myForm} validators={[NumberValidator]} name="height"/>
        <TextField form={this.state.myForm} validators={[NumberValidator]} name="age"/>
        Form State: {this.state.myForm.valid ? 'valid' : 'invalid'}
      </div>
    );
  }
}

export default App;
