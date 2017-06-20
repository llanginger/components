import React from "react";
import styled from "styled-components";

export const DummyButton = props => {
    const Component = styled.button`
    font-size: 20px;
    text-align: center;
    background-color: ${props => props.backgroundColor};
    border: none;
    box-shadow: 5px 5px 5px #888;
    padding: ${props => (props.large ? "25px 30px" : "15px 20px")};
    cursor: pointer;
    transition: all .05s linear;
    transform: translate(0px);
    color: ${props => props.color};
  
    :hover {
      transform: scale(1.03);
    }

    :active {
      outline: none;
      box-shadow: 4px 4px 4px #666;
      transform: translate(1px, 1px);
    }

    :focus {
      outline: none;
    }
  `;

    return (
        <Component
            color={props.color}
            backgroundColor={props.backgroundColor}
            large={props.large}
        >
            {props.text}
        </Component>
    );
};

DummyButton.defaultProps = {
    large: false,
    color: "white",
    backgroundColor: "violet",
    text: "I'm a button"
};

export const CombinedDummyButton = {
    childNode: <DummyButton />,
    componentName: "Button"
};

// const DummyButtonDocs = [
//     {
//         propName: "color",
//         propType: "string",
//         description: "Describes text color"
//     },
//     {
//         propName: "text",
//         propType: "string",
//         description: "Button text to be rendered"
//     },
//     {
//         propName: "backgroundColor",
//         propType: "string",
//         description: "Button background color"
//     }
// ];
