import * as React from "react";

import { Intent, ProgressBar, Slider, Switch } from "@blueprintjs/core";

interface PEProps {
    value?: number;
    intent?: number;
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
            <div style={{ width: "80%" }}>
                <ProgressBar
                    value={this.props.value}
                    intent={this.props.intent}
                />
            </div>
        );
    }
}

ProgressExample.defaultProps = {
    value: null,
    intent: 1
};

export const ProgressBundle = {
    childNode: <ProgressExample />,
    componentName: "Progress bar"
};
