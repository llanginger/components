import React from "react";

import { NumberRange, RangeSlider } from "@blueprintjs/core";

class RangeSliderExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            range: [36, 72]
        };

        this._handleValueChange = this._handleValueChange.bind(this);
    }

    _handleValueChange = range => this.setState({ range });

    render() {
        return (
            <div style={{ width: "80%" }}>
                <RangeSlider
                    min={this.props.min}
                    max={this.props.max}
                    stepSize={this.props.stepSize}
                    labelStepSize={this.props.labelStepSize}
                    onChange={this._handleValueChange}
                    value={this.state.range}
                />
            </div>
        );
    }
}

RangeSliderExample.defaultProps = {
    min: 1,
    max: 100,
    stepSize: 2,
    labelStepSize: 20
};

export const SliderBundle = {
    childNode: <RangeSliderExample />,
    componentName: "Slider"
};
