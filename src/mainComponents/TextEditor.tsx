import * as React from "react";
import AceEditor from "react-ace";
import * as brace from "brace";
import "brace/mode/javascript";
import "brace/theme/tomorrow";
import "brace/theme/chrome";
import { Button, Intent, Collapse } from "@blueprintjs/core";
import styled from "styled-components";

import { store, Reducers } from "../store";
import { connect } from "react-redux";
import {
    UPDATE_ALL_PROPS,
    SHOW_ADVANCED_EDITOR,
    HIDE_ADVANCED_EDITOR
} from "../actions/actions";

interface TEState {
    editorText: string;
    submitButtonSuccess: boolean;
    showEditor: boolean;
}

const EditorContainer = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;

    > .submit-button {
        margin-top: 10px;
    }
`;

export class _TextEditor extends React.Component<any, TEState> {
    constructor(props) {
        super(props);

        this.state = {
            editorText: "I'm an editor!",
            showEditor: false,
            submitButtonSuccess: false
        };
        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._showEditor = this._showEditor.bind(this);
    }

    componentDidMount() {
        this.setState({
            editorText: JSON.stringify(this.props.value, null, "\t")
        });
    }

    _onChange(editorText, e) {
        this.setState({ editorText });
    }

    _onSubmit() {
        const text = JSON.parse(this.state.editorText);
        this.props.UPDATE_ALL_PROPS(text);
        this.setState({ submitButtonSuccess: true });
        setTimeout(() => {
            this.setState({ submitButtonSuccess: false });
        }, 1500);
    }

    _showEditor() {
        this.props.showAdvancedEditor
            ? this.props.HIDE_ADVANCED_EDITOR()
            : this.props.SHOW_ADVANCED_EDITOR();
    }
    _handleKeyPress(e) {
        if (e.keyCode === 13) {
            if (e.shiftKey) {
                e.preventDefault();
                this._onSubmit();
            }
        } else {
            return;
        }
    }

    render() {
        return (
            <div style={{ marginBottom: "10px" }}>
                <Collapse isOpen={this.props.showAdvancedEditor}>
                    <EditorContainer onKeyDown={this._handleKeyPress}>
                        <AceEditor
                            mode="javascript"
                            theme="tomorrow"
                            name="blah2"
                            onLoad={() => console.log("Loaded")}
                            onChange={this._onChange}
                            fontSize={14}
                            height="100%"
                            width="100%"
                            value={this.state.editorText}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 2
                            }}
                        />
                        <Button
                            className="submit-button"
                            text="Update component (Shift + enter)"
                            onClick={this._onSubmit}
                            intent={
                                this.state.submitButtonSuccess
                                    ? Intent.SUCCESS
                                    : Intent.PRIMARY
                            }
                        />

                    </EditorContainer>
                </Collapse>
                <Button
                    className="pt-fill"
                    style={{ marginTop: "10px" }}
                    text={
                        this.props.showAdvancedEditor
                            ? "Hide Advanced Editor"
                            : "Show Advanced Editor"
                    }
                    onClick={this._showEditor}
                    intent={Intent.SUCCESS}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: Reducers) => {
    return {
        value: state.componentReducer.component.props,
        showAdvancedEditor: state.editorState.showAdvancedEditor
    };
};

const mapDispatchToProps = {
    UPDATE_ALL_PROPS,
    SHOW_ADVANCED_EDITOR,
    HIDE_ADVANCED_EDITOR
};

export const TextEditor = connect(mapStateToProps, mapDispatchToProps)(
    _TextEditor
);
