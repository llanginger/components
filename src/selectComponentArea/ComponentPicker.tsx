import * as React from "react";
import styled from "styled-components";
import { ComponentListItem } from "./ComponentListItem";
import { ComponentList } from "./ComponentList";

import { componentBundleArray } from "../componentList/componentArray";

export const ComponentPicker = (props: any) => {
    const Container = styled.div`
    height: 100%;
    width: 300px;
    background-color: rgba(138, 155, 168, 0.2);
    flex-shrink: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
    
  `;

    // Map each component to its own ComponentListItem component
    const makeList = () => {
        return componentBundleArray.map((bundle, i) =>
            <ComponentListItem bundle={bundle} key={i} />
        );
    };

    return (
        <Container>
            <ComponentList>
                {makeList()}
            </ComponentList>
        </Container>
    );
};
