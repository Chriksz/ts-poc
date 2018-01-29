import * as React from 'react';
import FormElementBase, { Props } from './FormElementBase';

class TextField extends FormElementBase<{}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input
                    name={this.name}
                    onChange={event => {
                        this.updateFormElementValue(event.currentTarget.value);
                    }}
                />
                <ul>
                    {this.getCurrentErrorMsgs().map(result => {
                        return (
                            <li key={result}>
                                {result}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TextField;
