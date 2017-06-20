import React from "react";
import { Button, Dialog, Intent } from "@blueprintjs/core";

class DialogExample extends React.Component {
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

export const DialogBundle = {
    childNode: <DialogExample />,
    componentName: "Dialog"
};
