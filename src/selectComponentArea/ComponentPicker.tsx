import * as React from "react";
import styled from "styled-components";
import { ComponentListItem } from "./ComponentListItem";
import { ComponentList } from "./ComponentList";
import { Reducers } from "../store";
import { connect } from "react-redux";
import { NavBar } from "./NavBar";
import { PropList } from "../displayComponentArea/PropList";

import { componentBundleArray } from "../componentList/componentArray";

interface CPProps {
    showComponents: boolean;
}

const _ComponentPicker = (props: CPProps) => {
    const Container = styled.div`
    height: 100%;
    width: ${(props: CPProps) => (props.showComponents ? "500px" : "700px")};
    background-color: rgba(138, 155, 168, 0.2);
    flex-shrink: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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

    const chooseView = () => {
        console.log("Component picker view state: ", props);
        if (props.showComponents === true) {
            return (
                <ComponentList>
                    {makeList()}
                </ComponentList>
            );
        } else {
            return <PropList />;
        }
    };

    return (
        <Container showComponents={props.showComponents}>
            <NavBar />
            {chooseView()}
        </Container>
    );
};

const mapStateToProps = (store: Reducers) => {
    return {
        showComponents: store.editorState.showComponents
    };
};

export const ComponentPicker = connect(mapStateToProps, {})(_ComponentPicker);
