import * as React from "react";
import { InputGroup } from "@blueprintjs/core";
import { connect } from "react-redux";
import { Reducers } from "../store";
import styled from "styled-components";
import { FILTER_COMPONENTS } from "../actions/actions";

const Container = styled.div`
    width: 100%;
    padding: 0px;
`;

interface FSProps {
    filterComponents?: any;
    value?: string;
}

interface FSState {
    value: string;
}

class _FilterSearch extends React.Component<FSProps, FSState> {
    private input;

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(e) {
        this.setState({ value: e.target.value });
        this.props.filterComponents(e.target.value);
    }

    render() {
        return (
            <Container>
                <InputGroup
                    placeholder="Search Components"
                    leftIconName="search"
                    className="pt-large pt-fill"
                    value={this.state.value}
                    inputRef={ref => (this.input = ref)}
                    onChange={this._handleChange}
                />
            </Container>
        );
    }
}

const mapDispatchToProps = {
    filterComponents: FILTER_COMPONENTS
};

const mapStateToProps = state => {
    return {};
};

export const FilterSearch = connect(mapStateToProps, mapDispatchToProps)(
    _FilterSearch
);
