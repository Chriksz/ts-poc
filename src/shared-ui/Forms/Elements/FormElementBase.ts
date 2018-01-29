import * as React from 'react';
import FormModel from '../FormModel';
import ValidatorInterface from '../Validators/ValidatorInterface';
import { Validator } from '../Validators/ValidatorInterface';

export interface Props {
    form: FormModel;
    validators: Validator[];
    name: string;
}

export default class FormElementBase<BaseState> extends React.Component<Props, BaseState> {
    name: string;
    form: FormModel;
    value: any;
    valid: boolean;
    validatorCollection: Array<ValidatorInterface>;

    constructor(props: Props) {
        super(props);

        this.form = props.form;
        this.validatorCollection = props.validators.map(validator => {
            return new validator();
        });

        this.name = props.name;
        this.valid = true;
        
        this.form.addFormElement(this);
    }

    updateFormElementValue(value: any) {
        this.value = value;
        this.form.updateForm();
    }

    triggerValidators() {
        let valid = true;
        this.validatorCollection.forEach(validator => {
            valid = validator.validate(this.value) && valid;
        });
        this.valid = valid;
    }

    isValid(): boolean { 
        this.triggerValidators();
        return this.valid;
    }

    getCurrentErrors(): Array<ValidatorInterface> {
        return this.validatorCollection.filter(elem => !elem.valid);
    }

    getCurrentErrorMsgs(): Array<string> {
        const errors = this.getCurrentErrors();
        return errors.map(elem => elem.errorMsg);
    }
}
