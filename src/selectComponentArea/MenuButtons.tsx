import * as React from "react";
import styled from "styled-components";
import { Button } from "@blueprintjs/core";
import { Reducers } from "../store";
import { connect } from "react-redux";
import { SHOW_COMPONENTS, SHOW_EDITOR } from "../actions/actions";

interface CBProps {
    SHOW_COMPONENTS: any;
    isActive?: boolean;
}

const _ComponentButton = (props: CBProps) => {
    return (
        <Button
            text="Components List"
            className="pt-fill"
            onClick={props.SHOW_COMPONENTS}
            active={props.isActive}
        />
    );
};

const mapComponentDispatchToProps = {
    SHOW_COMPONENTS
};

const mapComponentStateToProps = (store: Reducers) => {
    return {
        isActive: store.editorState.showComponents
    };
};

export const ComponentButton = connect(
    mapComponentStateToProps,
    mapComponentDispatchToProps
)(_ComponentButton);

interface EBProps {
    SHOW_EDITOR: any;
    isActive?: boolean;
}

const _EditorButton = (props: EBProps) => {
    return (
        <Button
            text="Components List"
            className="pt-fill"
            onClick={props.SHOW_EDITOR}
            active={props.isActive}
        />
    );
};

const mapEditorDispatchToProps = {
    SHOW_EDITOR
};

const mapEditorStateToProps = (store: Reducers) => {
    return {
        isActive: !store.editorState.showComponents
    };
};

export const EditorButton = connect(
    mapEditorStateToProps,
    mapEditorDispatchToProps
)(_EditorButton);
