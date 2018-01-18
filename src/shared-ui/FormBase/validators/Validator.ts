export default interface Validator {
    ErrorMsg: string;
    Valid: boolean;
    Validate(formValue: string): boolean;
}