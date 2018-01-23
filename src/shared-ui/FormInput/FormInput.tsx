import * as React from 'react';
import FormElementBase from '../FormBase/FormElementBase';
import ModelConnector from '../FormBase/ModelConnector';
import FormElementModel from '../FormBase/FormElementModel';
import Validator from '../FormBase/validators/Validator';
interface Props {
    modelConnector: ModelConnector;
    name: string;
    validators: Array<Validator>;
}
interface State {
    ElementModel: FormElementModel; 
}
class FormInput extends FormElementBase<Props, State> {
    constructor(props: any) {
        super(props);
        this.FormModel = props.modelConnector.Model;
        this.Name = props.name;
        const model = new FormElementModel(this.props.validators, this.Name);
        this.FormModel.ElemModelCollection.push(model);
        this.state = {
            ElementModel: new FormElementModel(this.props.validators, this.Name)
        };
    }
    render() {
        return (
            <h2>
                <input
                    name={this.Name}
                    onChange={(event) => {
                        this.UpdateValidationState(event.currentTarget.value);

                        this.setState({
                            ElementModel: this.FormModel.GetElementByName(this.Name)
                        }, 
                        () => { 
                            this.props.modelConnector.UpdateParent(); 
                        });

                    }}
                />
                {this.state.ElementModel.GetCurrentErrorMsgs().map((result) => {
                    return result;
                })}
            </h2>
        );
    }
}
export default FormInput;