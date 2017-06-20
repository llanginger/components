import React from "react";
import styled from "styled-components";
import { Collapse } from "@blueprintjs/core";
import { store } from "./store";
import { DISPLAY_COMPONENT } from "./actions/actions";

export const ComponentListItem = props => {
    const Item = styled.li`
    height: 200px;
    width: 100%;
    background-color: white;
    margin: 10px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;

    & * {
      pointer-events: none;
    }
  `;

    const handleClick = () => {
        console.log("Props: ", props);
    };

    return (
        <Item onClick={() => store.dispatch(DISPLAY_COMPONENT(props.bundle))}>
            <p>{props.bundle.componentName || "No name given"}</p>
            {props.bundle.childNode}
        </Item>
    );
};
