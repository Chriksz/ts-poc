import FormElementModel from './FormElementModel';
export default class FormModel {
    ElemModelCollection: Array<FormElementModel>;
    name: string;
    valid: boolean;
    UpdateValidationState(value: string, inputName: string): boolean {
        this.valid = true;
        const toUpdate = this.ElemModelCollection.find(elem => elem.name === inputName);
        if (!toUpdate) {
            throw new Error('No element like this!');
        }
        toUpdate.updateState(value);
        this.ElemModelCollection.forEach((elem) => {
            this.valid = elem.IsValid() && this.valid;
        });
        return this.valid;
    }
    GetElementByName(name: string): FormElementModel {
        const finding = this.ElemModelCollection.find(elem => name === elem.name);
        if (!finding) {
            throw new Error('Could not retrive element!');
        }
        return finding;
    }
}