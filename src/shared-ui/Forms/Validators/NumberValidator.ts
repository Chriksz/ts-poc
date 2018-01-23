import ValidatorInterface from './ValidatorInterface';

export default class NumberValidator implements ValidatorInterface {
    ErrorMsg = 'The value must be number!';
    Valid = false;
    Validate(formValue: string) {
        this.Valid = !isNaN(Number(formValue));
        return this.Valid;
    }
}