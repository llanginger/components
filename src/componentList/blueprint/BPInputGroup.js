import React from "react";

import { InputGroup, Button, Intent } from "@blueprintjs/core";

const lockButton = (
    <Button intent={Intent.WARNING} disabled={false} iconName={"lock"} />
);

const InputGroupExample = props => {
    return (
        <InputGroup
            className={props.className}
            disabled={props.disabled}
            placeholder={props.placeholder}
            rightElement={props.rightElement}
            type={props.type}
        />
    );
};

InputGroupExample.defaultProps = {
    className: "pt-large",
    disabled: false,
    placeholder: "Enter your password...",
    rightElement: lockButton,
    type: "password"
};

export const InputGroupBundle = {
    childNode: <InputGroupExample />,
    componentName: "Input group"
};
