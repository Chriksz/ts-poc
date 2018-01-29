import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import App from './App';
import FormModel from './shared-ui/Forms/FormModel';
import FormElementBase from './shared-ui/Forms/Elements/FormElementBase';
import TextField from './shared-ui/Forms/Elements/TextField';
import NumberValidator from './shared-ui/Forms/Validators/NumberValidator';
import { ReactElement } from 'react';


const initializeApp = () => {
    const MyApp = (<App /> as ReactElement<{}>);
    const AppComponent = TestUtils.renderIntoDocument(MyApp);
    const MyForm = new FormModel((AppComponent as React.Component));
    const MyTextField = (<TextField form={MyForm} validators={[NumberValidator]} name={'inputField'} />);
    const MyFormElement = (TestUtils.renderIntoDocument(MyTextField) as FormElementBase<{}>);
    MyForm.addFormElement(MyFormElement);
    return { MyForm, MyFormElement };
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('returns form has error if input value is not a number', () => {
    const { MyForm, MyFormElement } = initializeApp();
    MyFormElement.updateFormElementValue('test');
    expect(MyForm.valid).toBeFalsy();
});

it('returns form has no error if input value is a number', () => {
    const { MyForm, MyFormElement } = initializeApp();
    MyFormElement.updateFormElementValue(42);
    expect(MyForm.valid).toBeTruthy();
});