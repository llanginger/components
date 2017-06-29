import * as React from "react";

import { Intent, ProgressBar, Slider, Switch } from "@blueprintjs/core";

interface PEProps {
    value?: number;
    intent?: number;
    style?: {};
}

interface PEState {
    value: number;
}

export class ProgressExample extends React.Component<PEProps, PEState> {
    public static defaultProps: PEProps;

    constructor(props) {
        super(props);

        this.state = {
            value: 0.7
        };

        this._handleValueChange = this._handleValueChange.bind(this);
    }

    _handleValueChange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <div style={this.props.style}>
                <ProgressBar
                    value={this.props.value}
                    intent={this.props.intent}
                />
            </div>
        );
    }
}

ProgressExample.defaultProps = {
    value: 0.5,
    intent: 1,
    style: { width: "80%", backgroundColor: "palevioletred" }
};

export const ProgressBundle = {
    childNode: <ProgressExample />,
    componentName: "Progress bar"
};
