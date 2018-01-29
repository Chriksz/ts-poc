import ValidatorInterface from './ValidatorInterface';

export default class NumberValidator implements ValidatorInterface {
    errorMsg = 'The value must be number!';
    valid = false;
    validate(formValue: any) {
        this.valid = !isNaN(Number(formValue));
        return this.valid;
    }
}