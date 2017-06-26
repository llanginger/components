import * as React from "react";
import styled from "styled-components";

export const ComponentList = (props: any) => {
    const List = styled.ul`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    justify-content: ${(props: any) =>
        props.children.length > 3 ? "flex-start" : "center"};
    padding: 0px 10px;
    list-style-type: none;
  `;

    return (
        <List>
            {props.children}
        </List>
    );
};
