import * as React from "react";
import AceEditor from "react-ace";
import * as brace from "brace";
import "brace/mode/javascript";
import "brace/theme/monokai";
import { Button, Intent, Collapse } from "@blueprintjs/core";

import { store, Reducers } from "../store";
import { connect } from "react-redux";
import { UPDATE_ALL_PROPS } from "../actions/actions";

console.log("Ace editor: ", AceEditor);

interface TEState {
    editorText: string;
    showEditor: boolean;
}

export class _TextEditor extends React.Component<any, TEState> {
    constructor(props) {
        super(props);

        this.state = { editorText: "I'm an editor!", showEditor: false };
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
        console.log("On change event: ", e);
        this.setState({ editorText });
    }

    _onSubmit() {
        const text = JSON.parse(this.state.editorText);
        console.log("Json parsed text: ", text);
        this.props.UPDATE_ALL_PROPS(text);
    }

    _showEditor() {
        this.setState({ showEditor: !this.state.showEditor });
    }
    _handleKeyPress(e) {
        if (e.keyCode === 13) {
            if (e.shiftKey) {
                e.preventDefault();
                const text = JSON.parse(this.state.editorText);
                console.log("Json parsed text: ", text);
                this.props.UPDATE_ALL_PROPS(text);
            }
        } else {
            return;
        }
    }

    render() {
        return (
            <div style={{ marginBottom: "10px" }}>
                <Collapse isOpen={this.state.showEditor}>
                    <div
                        style={{ height: "400px", marginBottom: "50px" }}
                        onKeyDown={this._handleKeyPress}
                    >
                        <AceEditor
                            mode="javascript"
                            theme="monokai"
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
                            text="Submit component changes"
                            onClick={this._onSubmit}
                            intent={Intent.PRIMARY}
                        />

                    </div>
                </Collapse>
                <Button
                    text="Advanced Editor"
                    onClick={this._showEditor}
                    intent={Intent.SUCCESS}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: Reducers) => {
    return {
        value: state.componentReducer.component.props
    };
};

const mapDispatchToProps = {
    UPDATE_ALL_PROPS
};

export const TextEditor = connect(mapStateToProps, mapDispatchToProps)(
    _TextEditor
);
