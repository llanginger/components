import * as React from "react";
import AceEditor from "react-ace";
import * as brace from "brace";
import "brace/mode/javascript";
import "brace/theme/monokai";

import { store, Reducers } from "../store";
import { connect } from "react-redux";

console.log("Ace editor: ", AceEditor);

export class _TextEditor extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = { editorText: "I'm an editor!" };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            editorText: JSON.stringify(this.props.value, null, "\t")
        });
    }

    _onChange(editorText) {
        this.setState({ editorText });
        console.log("Editor text: ", this.state.editorText);
    }

    render() {
        return (
            <div style={{ height: "400px" }}>
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    name="blah2"
                    onLoad={() => console.log("Loaded")}
                    onChange={this._onChange}
                    fontSize={14}
                    height="100%"
                    value={this.state.editorText}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2
                    }}
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

export const TextEditor = connect(mapStateToProps, {})(_TextEditor);
