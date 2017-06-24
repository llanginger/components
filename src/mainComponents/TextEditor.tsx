import * as React from "react";
import * as CodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import AceEditor from "react-ace";
import * as brace from "brace";
import "brace/mode/javascript";
import "brace/theme/monokai";

console.log("Ace editor: ", AceEditor);

export const TextEditor: (props) => any = (props: any) => {
    const onChange = (newValue: any) => {
        console.log("New code: ", newValue);
    };

    return (
        <div style={{ height: "400px" }}>
            <AceEditor
                mode="javascript"
                theme="monokai"
                name="blah2"
                onLoad={() => console.log("Loaded")}
                onChange={() => console.log("Loaded")}
                fontSize={14}
                height="100%"
                value={"Here's some code"}
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
};
