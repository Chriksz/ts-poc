import * as React from 'react';
import FormElementBase from './Elements/FormElementBase';

export default class FormModel {
    formElements: Array<FormElementBase<{}>>;
    valid: boolean;
    parentComponent: React.Component;

    constructor(parentComponent: React.Component) {
        this.parentComponent = parentComponent;
        this.formElements = [];
    }

    updateValidationState() {
        let valid = true;
        this.formElements.forEach(elem => {
            valid = elem.isValid() && valid;
        });
        this.valid = valid;
    }

    updateForm() {
        this.updateValidationState();
        this.parentComponent.forceUpdate();
    }

    isValid(): boolean {
        this.updateValidationState();
        return this.valid;
    }

    addFormElement(formElement: FormElementBase<{}>) {
        this.formElements.push(formElement);
    }
}