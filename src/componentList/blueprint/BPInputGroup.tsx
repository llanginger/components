import * as React from "react";

import { InputGroup, Button, Intent } from "@blueprintjs/core";

const lockButton = (
    <Button intent={Intent.PRIMARY} disabled={false} iconName={"lock"} />
);

const InputGroupExample: any = props => {
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
    type: "password",
    rightElement: (
        <Button intent={Intent.PRIMARY} disabled={false} iconName={"lock"} />
    )
};

export const InputGroupBundle = {
    childNode: <InputGroupExample />,
    componentName: "Input group"
};
