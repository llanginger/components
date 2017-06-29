import * as React from "react";
import styled from "styled-components";
import { Emojione } from "react-emoji-render";

import { UPDATE_PROP } from "../actions/actions";
import { store } from "../store";

const Form = styled.form`
  margin-bottom: 20px;
`;

interface SPUProps {
    propValue: string;
    propName: string;
}

interface SPUState {
    inputValue: string;
}

export class StringPropUpdater extends React.Component<SPUProps, SPUState> {
    private input;

    constructor(props) {
        super(props);

        this.state = { inputValue: "" };
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(e) {
        e.preventDefault();
        store.dispatch(UPDATE_PROP(this.props.propName, this.input.value));
    }

    render() {
        return (
            <Form onSubmit={this._onSubmit}>

                <p>{this.props.propName}, string:</p>
                <input
                    className="pt-input pt-fill"
                    placeholder={this.props.propValue || "I'm an input"}
                    ref={input => (this.input = input)}
                />
            </Form>
        );
    }
}
