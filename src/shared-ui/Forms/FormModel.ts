import FormElementBase from './Elements/FormElementBase';

export default class FormModel{
    formElements: Array<FormElementBase<{}, {}>>;
    valid: boolean;
    updateValidationState(value: string, inputName: string): boolean {
      return true;
    }
}