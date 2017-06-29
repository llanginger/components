import * as React from "react";
import styled from "styled-components";

import { Button, Intent } from "@blueprintjs/core";

interface EBProps {
    text: string;
}

export const ExportButton = (props: EBProps) => {
    return (
        <div style={{ marginTop: "auto" }}>
            <Button
                text={props.text}
                className="pt-fill"
                intent={Intent.WARNING}
            />
        </div>
    );
};
