import * as React from "react";
import styled from "styled-components";

export const PropItem = (props: any) => {
    const DocItem = styled.li`
    margin-bottom: 10px;
    color: white;
  `;

    const Divider = styled.hr`
    border-color: #00bcd4;
  `;

    return (
        <DocItem>
            <p>PropName: {props.propName}</p>
            <p>PropType: {props.propType}</p>
            <p>Description: {props.description}</p>
            <Divider />
        </DocItem>
    );
};
