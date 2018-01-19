import FormModel from './FormModel';

export default class ModelConnector {
    Model: FormModel;
    Component: React.Component;
    ParentCallback: (model: FormModel) => void;
    constructor(Model: FormModel, Component: React.Component) {
        this.Model = Model;
        this.Component = Component;
        if (!this.Component.state) {
            this.Component.state = {};
        }
        this.Component.state[this.Model.Name] = this.Model;
    }
    UpdateParent() {
        const newsState = {};
        newsState[this.Model.Name] = this.Model;
        this.Component.setState(newsState);
    }
}