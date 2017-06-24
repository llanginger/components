import * as React from "react";
import styled from "styled-components";

import { StringPropUpdater } from "./StringPropUpdater";
import { BoolPropUpdater } from "./BoolPropUpdater";
import { NumPropUpdater } from "./NumPropUpdater";

export const generateUpdaters = propList => {
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
        } else if (typeof value === "object") {
            propArray.push(
                <div key={i}>
                    <StringPropUpdater propValue={value} propName={key} />
                </div>
            );
        } else {
            return null;
        }
    });
    return propArray;
};
