import * as React from 'react';
import './App.css';
import FormInput from './shared-ui/FormInput/FormInput';
import FormModel from './shared-ui/FormBase/FormModel';
import FormElementModel from './shared-ui/FormBase/FormElementModel';
import MustBeNumber from './shared-ui/FormBase/validators/MustBeNumber';
import ModelConnector from './shared-ui/FormBase/ModelConnector';

const logo = require('./logo.svg');
interface AppState {
  MyFormModel: FormModel;
}
class App extends React.Component<{}, AppState> {
  Connector: ModelConnector;
  constructor(props: any) {
    super(props);
    const model = new FormModel();
    model.Name = 'MyFormModel';
    model.ElemModelCollection = [
      new FormElementModel([new MustBeNumber()], 'firstinp'), 
      new FormElementModel([new MustBeNumber()], 'secondinput')
    ];
    this.Connector = new ModelConnector(model, this);
    this.state = { MyFormModel: model};
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
        <FormInput modelConnector={this.Connector} name="firstinp"/>
        <FormInput modelConnector={this.Connector} name="secondinput"/>
        Form State: {this.state.MyFormModel.Valid ? 'valid' : 'invalid'}
      </div>
    );
  }
}

export default App;
