import Validator from './Validator';

export default class MustBeNumber implements Validator {
    errorMsg = 'The value must be number!';
    valid = false;
    validate(formValue: string) {
        this.valid = !isNaN(Number(formValue));
        return this.valid;
    }
}