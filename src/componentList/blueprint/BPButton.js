import React from "react";
import { Button } from "@blueprintjs/core";

const BPButton = props => {
    return (
        <Button
            disabled={props.disabled}
            active={props.active}
            href={props.href}
            iconName={props.iconName}
            loading={props.loading}
            rightIconName={props.rightIconName}
            target={props.target}
            text={props.text}
        />
    );
};

BPButton.defaultProps = {
    disabled: false,
    active: false,
    href: "./",
    iconName: "duplicate",
    loading: false,
    rightIconName: "share",
    target: "_blank",
    text: "Duplicate this page"
};

export const ButtonBundle = {
    childNode: <BPButton />,
    componentName: "Button"
};
