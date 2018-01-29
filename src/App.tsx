import * as React from 'react';
import './App.css';

import FormModel from './shared-ui/Forms/FormModel';
import NumberValidator from './shared-ui/Forms/Validators/NumberValidator';
import TextField from './shared-ui/Forms/Elements/TextField';

class App<BaseProps, BaseState> extends React.Component<BaseProps, BaseState> {
  myForm: FormModel;

  constructor(props: any) {
    super(props);
    
    this.myForm = new FormModel(this);
  }

  render() {
    return (
      <div className="App">
        <TextField
          form={this.myForm}
          validators={[NumberValidator]}
          name="height"
        />
        <TextField
          form={this.myForm}
          validators={[NumberValidator]}
          name="age"
        />
        <p>
          Form State: {this.myForm.valid ? 'valid' : 'invalid'}
        </p>
      </div>
    );
  }
}

export default App;
