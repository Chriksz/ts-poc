
export default interface ValidatorInterface {
    errorMsg: string;
    valid: boolean;
    validate(formValue: string): boolean;
}

export interface Validator {
    new (): ValidatorInterface;
}