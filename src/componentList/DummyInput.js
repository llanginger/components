import React from "react";
import styled from "styled-components";

export const DummyInput = props => {
    const Component = styled.input`
    font-size: 20px;
    text-align: center;
    color: ${props => props.color};
    border: 2px solid ${props => props.borderColor};
    box-sizing: border-box;
    border-radius: 5px;
    padding: 15px 10px;
  `;

    return (
        <div>
            <Component
                type={props.type || "text"}
                borderColor={props.borderColor}
                placeholder={props.placeholder}
            />
        </div>
    );
};

DummyInput.defaultProps = {
    placeholder: "I'm an input!",
    borderColor: "orangered",
    type: "text"
};

export const CombinedDummyInput = {
    childNode: <DummyInput />,
    componentName: "Input"
};

// Probably don't need these
// const DummyInputDocs = [
//     {
//         propName: "type",
//         propType: "string",
//         description: "Sets type of input, defaults to text"
//     },
//     {
//         propName: "borderColor",
//         propType: "string",
//         description: "Input border color"
//     },
//     {
//         propName: "placeholder",
//         propType: "string",
//         description: "Input placeholder text"
//     }
// ];
