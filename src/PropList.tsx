import * as React from "react";
import styled from "styled-components";

import { PropItem } from "./PropItem";
import { StringPropUpdater } from "./propUpdaters/StringPropUpdater";
import { BoolPropUpdater } from "./propUpdaters/BoolPropUpdater";
import { NumPropUpdater } from "./propUpdaters/NumPropUpdater";
import { TextEditor } from "./mainComponents/TextEditor";
import { generateUpdaters } from "./propUpdaters/PropUpdaters";
import { Reducers } from "./store";
import { connect } from "react-redux";

interface PLProps {
    currentComponent: {
        props: any;
        componentName: string;
    };
}

export const _PropList = (props: PLProps) => {
    const Container = styled.div`
    width: 700px;
    height: 100%;
    padding: 0;
    display: flex;
    background-color: rgba(19, 124, 189, 0.10);
    justify-content: flex-start;
    flex-shrink: 0;
    flex-direction: column;
    position: relative;
  `;
    const DocWrapper = styled.ul`
    width: 100%;
    height: 100%;
    list-style-type: none;
    padding: 0px 10px 10px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-y: auto;
  `;

    const DocHeader = styled.div`
    font-size: 25px;
    width: 100%;
    text-align: center;
    padding: 20px 0px;
    background-color: #00bcd4;
    margin-left: 0 auto;
    margin-right: 0 auto;
    color: white;
  `;

    return (
        <Container>
            <DocHeader>{props.currentComponent.componentName} Props:</DocHeader>
            <DocWrapper>
                <TextEditor />
                {generateUpdaters(props.currentComponent.props)}
            </DocWrapper>
        </Container>
    );
};

const mapStateToProps = (state: Reducers) => {
    return {
        currentComponent: state.componentReducer.component
    };
};

export const PropList = connect(mapStateToProps, {})(_PropList);
