import FormElementModel from './FormElementModel';
export default class FormModel {
    ElemModelCollection: Array<FormElementModel> = [];
    Name: string;
    Valid: boolean;
    UpdateValidationState(value: string, inputName: string): boolean {
        this.Valid = true;
        const toUpdate = this.ElemModelCollection.find(elem => elem.Name === inputName);
        if (!toUpdate) {
            throw new Error('No element like this!');
        }
        toUpdate.UpdateState(value);
        this.ElemModelCollection.forEach((elem) => {
            this.Valid = elem.IsValid() && this.Valid;
        });
        return this.Valid;
    }
    GetElementByName(name: string): FormElementModel {
        const finding = this.ElemModelCollection.find(elem => name === elem.Name);
        if (!finding) {
            throw new Error('Could not retrive element!');
        }
        return finding;
    }
}