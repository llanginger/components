import * as React from "react";
import { Treemap } from "react-vis";
var myData = require("./treemapData.json");

class ShowcaseButton extends React.Component<any, any> {
    render() {
        const { buttonContent, onClick } = this.props;
        return (
            <button className="showcase-button" onClick={onClick}>
                {buttonContent}
            </button>
        );
    }
}

const MODE = [
    "circlePack",
    "partition",
    "partition-pivot",
    "squarify",
    "resquarify",
    "slice",
    "dice",
    "slicedice",
    "binary"
];

class ReactVisTree extends React.Component<any, any> {
    public static defaultProps: any;

    constructor(props) {
        super(props);
        this.state = {
            modeIndex: 0
        };
        this.updateModeIndex = this.updateModeIndex.bind(this);
    }

    updateModeIndex = increment => () => {
        const newIndex = this.state.modeIndex + (increment ? 1 : -1);
        const modeIndex =
            newIndex < 0
                ? MODE.length - 1
                : newIndex >= MODE.length ? 0 : newIndex;
        this.setState({ modeIndex });
    };

    render() {
        return (
            <div>
                <ShowcaseButton
                    onClick={this.updateModeIndex(true)}
                    buttonContent={"NEXT MODE"}
                />
                <div>
                    {MODE[this.state.modeIndex]}
                </div>
                <Treemap
                    animation={this.props.animation}
                    className=""
                    colorType={this.props.colorType}
                    colorRange={["#88572C"]}
                    data={myData}
                    mode={MODE[this.state.modeIndex]}
                    height={this.props.height}
                    width={this.props.width}
                />
            </div>
        );
    }
}

ReactVisTree.defaultProps = {
    height: 300,
    width: 300,
    colorType: "literal",
    animation: true
};

export const ReactVisTreeBundle = {
    childNode: <ReactVisTree />,
    componentName: "Tree Map"
};
