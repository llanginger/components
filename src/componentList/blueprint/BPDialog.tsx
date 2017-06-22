import * as React from "react";
import { Button, Dialog, Intent } from "@blueprintjs/core";

interface DEProps {
    iconName?: string;
    title?: string;
    canEscapeKeyClose?: boolean;
}

class DialogExample extends React.Component<DEProps, any> {
    public static defaultProps: DEProps;
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
        this._toggleDialog = this._toggleDialog.bind(this);
    }

    _toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        console.log("Dialogue state: ", this.state);
        return (
            <div>
                <Button onClick={this._toggleDialog} text="Show dialog" />
                <Dialog
                    iconName={this.props.iconName}
                    isOpen={this.state.isOpen}
                    onClose={this._toggleDialog}
                    title={this.props.title}
                    canEscapeKeyClose={this.props.canEscapeKeyClose}
                >
                    <div className="pt-dialog-body">
                        Some content
                    </div>
                    <div className="pt-dialog-footer">
                        <div className="pt-dialog-footer-actions">
                            <Button text="Secondary" />
                            <Button
                                intent={Intent.PRIMARY}
                                onClick={this._toggleDialog}
                                text="Primary"
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

DialogExample.defaultProps = {
    iconName: "inbox",
    title: "Dialog Header",
    canEscapeKeyClose: true
};

interface Bundle {
    childNode: any;
    componentName: string;
}
export const DialogBundle: Bundle = {
    childNode: <DialogExample />,
    componentName: "Dialog"
};
