import * as React from 'react';

export default class FormElementBase<BaseProps, BaseState> extends React.Component<BaseProps, BaseState> {
    Value: string;
    Name: string;
    constructor(props: any) {
        super(props);
    }
    UpdateValidationState(value: string) {
    }
    GetElementErrors(): Array<string> {
      return [];
    }
}
