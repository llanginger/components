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
    filterValue?: string;
}

const _ComponentPicker = (props: CPProps) => {
    const Container = styled.div`
        height: 100%;
        width: ${(props: CPProps) =>
            props.showComponents ? "500px" : "700px"};
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
        const compArray = componentBundleArray
            .filter((bundle, i) => {
                return (
                    bundle.componentName
                        .toLowerCase()
                        .indexOf(props.filterValue.toLowerCase()) > -1
                );
            })
            .map((bundle, i) => <ComponentListItem bundle={bundle} key={i} />);
        return compArray;
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
        showComponents: store.editorState.showComponents,
        filterValue: store.filterCompontReducer.filter
    };
};

export const ComponentPicker = connect(mapStateToProps, {})(_ComponentPicker);
