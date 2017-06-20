import React from "react";
import styled from "styled-components";

export const DummyComponent = props => {
    const Component = styled.div`
    font-size: 20px;
    text-align: center;
    color: ${props => props.color};
    background-color: #FFFAFA;
    border: 2px solid #333;
    border-radius: 5px;
    padding: 5px 10px;
  `;

    return <Component color={props.color}>{props.text}</Component>;
};

DummyComponent.defaultProps = {
    color: "cyan",
    text: "I'm a text block!"
};
export const CombinedDummyComponent = {
    childNode: <DummyComponent />,
    componentName: "Text Block"
};

// Probably don't need these
// const DummyComponentDocs = [
//     {
//         propName: "color",
//         propType: "string",
//         description: "Describes text color"
//     },
//     {
//         propName: "text",
//         propType: "string",
//         description: "Text to be rendered"
//     }
// ];
