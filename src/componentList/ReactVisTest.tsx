import * as React from "react";
import { RadialChart } from "react-vis";
// import "react-vis/dist/styles/radial-chart";

const ReactVisTest: any = (props: any) => {
    return (
        <RadialChart
            innerRadius={props.innerRadius}
            radius={props.radius}
            data={props.data}
            width={props.width}
            height={props.height}
        />
    );
};

ReactVisTest.defaultProps = {
    innerRadius: 100,
    radius: 140,
    width: 300,
    height: 300,
    data: [{ angle: 2 }, { angle: 6 }, { angle: 1 }]
};

export const ReactVistTestBundle = {
    childNode: <ReactVisTest />,
    componentName: "Vis test"
};
