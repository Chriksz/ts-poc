import Validator from './Validator';

export default class MustBeNumber implements Validator {
    ErrorMsg = 'The value must be number!';
    Valid = false;
    Validate(formValue: string) {
        this.Valid = !isNaN(Number(formValue));
        return this.Valid;
    }
}