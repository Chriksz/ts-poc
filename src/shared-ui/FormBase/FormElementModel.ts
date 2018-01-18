import Validator from './validators/Validator';

export default class FormElementModel {
    valid: boolean;
    validatorCollection: Array<Validator>;
    name: string;
    value: string;
    constructor(validators: Array<Validator>, name: string) {
        this.validatorCollection = validators;
        this.name = name;
    }
    TriggerValidators(): boolean {
        this.validatorCollection.forEach((validator) => {
            this.valid = validator.validate(this.value) && this.valid;
        });
        return this.valid;
    }
    updateState(value: string): boolean {
        this.valid = true;
        this.value = value;
        return this.TriggerValidators();
    }
    IsValid(): boolean { 
        return this.TriggerValidators();
    }
    getCurrentErrors(): Array<Validator> {
        return this.validatorCollection.filter((elem) => !elem.valid);
    }
    getCurrentErrorMsgs(): Array<string> {
        const errors: Array<Validator>  = this.getCurrentErrors();
        const erroStrings: Array<string> = new Array();
        errors.forEach((elem) => {
            erroStrings.push(elem.errorMsg);
        });
        return erroStrings;
    }
}