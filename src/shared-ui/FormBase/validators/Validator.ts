export default interface Validator {
    errorMsg: string;
    valid: boolean;
    validate(formValue: string): boolean;
}