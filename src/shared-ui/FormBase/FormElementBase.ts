import * as React from 'react';
import FormModel from './FormModel';

export default class FormElementBase<BaseProps, BaseState> extends React.Component<BaseProps, BaseState> {
    FormModel: FormModel;
    Value: string;
    Name: string;
    constructor(props: any) {
        super(props);
    }
    UpdateValidationState(value: string) {
        this.Value = value;
        this.FormModel.UpdateValidationState(this.Value, this.Name);
    }
    GetElementErrors(): Array<string> {
        const element = this.FormModel.GetElementByName(this.Name);
        if (!element) {
            throw new Error('Element with name is not found!');
        }
        return element.GetCurrentErrorMsgs();
    }
}
