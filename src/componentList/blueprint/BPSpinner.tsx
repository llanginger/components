import * as React from "react";

import { Classes, Spinner, Intent } from "@blueprintjs/core";

interface SEProps {
    intent?: number;
    className?: string;
}

const SpinnerExample: any = (props: SEProps) => {
    return <Spinner intent={props.intent} className={props.className} />;
};

SpinnerExample.defaultProps = {
    intent: Intent.WARNING,
    className: "pt-large"
};

export const SpinnerBundle = {
    childNode: <SpinnerExample />,
    componentName: "Spinner"
};
