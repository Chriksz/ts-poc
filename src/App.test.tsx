// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './App';
// import FormModel from './shared-ui/FormBase/FormModel';
// import FormElementModel from './shared-ui/FormBase/FormElementModel';
// import MustBeNumber from './shared-ui/FormBase/validators/MustBeNumber';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

// it('returns form has error if input value is not number', () => {
//   const MyFormModel = new FormModel();
//   MyFormModel.ElemModelCollection = [new FormElementModel([new MustBeNumber()], 'firstinp') ];
//   MyFormModel.UpdateValidationState('a', 'firstinp');
//   expect(MyFormModel.Valid).toBeFalsy();
// });
// it('returns form has no error if input value is a number', () => {
//   const MyFormModel = new FormModel();
//   MyFormModel.ElemModelCollection = [new FormElementModel([new MustBeNumber()], 'firstinp') ];
//   MyFormModel.UpdateValidationState('1', 'firstinp');
//   expect(MyFormModel.Valid).toBeTruthy();
// });