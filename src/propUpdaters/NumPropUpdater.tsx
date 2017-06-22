import * as React from "react";
import styled from "styled-components";

import { UPDATE_PROP } from "../actions/actions";
import { store } from "../store";

const Form = styled.form`
  margin-bottom: 20px;
`;

interface NPUProps {
    propValue: number;
    propName: string;
}

interface NPUState {
    inputValue: string;
}

export class NumPropUpdater extends React.Component<NPUProps, NPUState> {
    public input;
    constructor(props) {
        super(props);

        this.state = { inputValue: "" };
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(e) {
        e.preventDefault();
        store.dispatch(
            UPDATE_PROP(this.props.propName, Number(this.input.value))
        );
    }

    render() {
        return (
            <Form onSubmit={this._onSubmit}>

                <p>{this.props.propName}:</p>
                <input
                    className="pt-input pt-fill"
                    placeholder={this.props.propValue.toString() || "0"}
                    ref={input => (this.input = input)}
                />
            </Form>
        );
    }
}
