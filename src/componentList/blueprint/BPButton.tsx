import * as React from "react";
import { Button } from "@blueprintjs/core";

const BPButton: any = (props: any) => {
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
            onClick={props.onClick}
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
    text: "Duplicate this page",
    onClick: () => console.log("Clicked")
};

export const ButtonBundle = {
    childNode: <BPButton />,
    componentName: "Button"
};
