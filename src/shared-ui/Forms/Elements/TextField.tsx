import * as React from 'react';

interface Props {
    modelConnector: ModelConnector;
    name: string;
}
interface State {
    ElementModel: FormElementModel; 
}
class FormInput extends FormElementBase<Props, State> {
    constructor(props: any) {
        super(props);
        this.FormModel = props.modelConnector.Model;
        this.Name = props.name;
        this.state = {
            ElementModel: this.FormModel.GetElementByName(this.Name)
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