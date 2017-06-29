import * as React from "react";
import styled from "styled-components";

import { Button, Intent } from "@blueprintjs/core";

interface EBProps {
    text: string;
}

export const ExportButton = (props: EBProps) => {
    const handleClick = () => {
        alert("You're definitely exporting this file!");
    };
    return (
        <div style={{ marginTop: "auto" }}>
            <Button
                text={props.text}
                className="pt-fill"
                intent={Intent.WARNING}
                onClick={handleClick}
            />
        </div>
    );
};
