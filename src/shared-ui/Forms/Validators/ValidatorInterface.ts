export default interface ValidatorInterface {
  ErrorMsg: string;
  Valid: boolean;
  Validate(formValue: string): boolean;
}