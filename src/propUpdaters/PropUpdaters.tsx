// TODO: connect all these individually to the redux store

import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Reducers } from "../store";

import { StringPropUpdater } from "./StringPropUpdater";
import { BoolPropUpdater } from "./BoolPropUpdater";
import { NumPropUpdater } from "./NumPropUpdater";

const generateUpdaters = propList => {
    let obj = false;
    console.log("Generate updaters called");
    let propArray = [];
    Object.keys(propList).forEach((key, i) => {
        const value = propList[key];
        if (typeof value === "string") {
            propArray.push(
                <div key={i}>
                    <StringPropUpdater propValue={value} propName={key} />
                </div>
            );
        } else if (typeof value === "number") {
            propArray.push(
                <div key={i}>
                    <NumPropUpdater propValue={value} propName={key} />
                </div>
            );
        } else if (typeof value === "boolean") {
            propArray.push(
                <div key={i}>
                    <BoolPropUpdater propValue={value} propName={key} />
                </div>
            );
        } else if (typeof value === "object" && obj === false) {
            obj = true;
            propArray.push(
                <div key={i}>
                    <p>Open advanced editor for more detailed prop options!</p>
                </div>
            );
        } else {
            return null;
        }
    });
    return propArray;
};

const _PropUpdaters = (props: any) => {
    console.log("Prop updaters initialized");

    return (
        <div>
            {generateUpdaters(props.propList)}
        </div>
    );
};

const mapStateToProps = (state: Reducers) => {
    return {
        propList: state.componentReducer.component.props
    };
};

export const PropUpdaters = connect(mapStateToProps, {})(_PropUpdaters);
