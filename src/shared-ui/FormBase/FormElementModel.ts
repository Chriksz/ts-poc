import Validator from './validators/Validator';

export default class FormElementModel {
    Valid: boolean;
    ValidatorCollection: Array<Validator>;
    Name: string;
    Value: string;
    constructor(validators: Array<Validator>, name: string) {
        this.ValidatorCollection = validators;
        this.Name = name;
    }
    TriggerValidators(): boolean {
        this.ValidatorCollection.forEach((validator) => {
            this.Valid = validator.Validate(this.Value) && this.Valid;
        });
        return this.Valid;
    }
    UpdateState(value: string): boolean {
        this.Valid = true;
        this.Value = value;
        return this.TriggerValidators();
    }
    IsValid(): boolean { 
        return this.TriggerValidators();
    }
    GetCurrentErrors(): Array<Validator> {
        return this.ValidatorCollection.filter((elem) => !elem.Valid);
    }
    GetCurrentErrorMsgs(): Array<string> {
        const errors: Array<Validator>  = this.GetCurrentErrors();
        const erroStrings: Array<string> = errors.map(elem => elem.ErrorMsg);
        return erroStrings;
    }
}