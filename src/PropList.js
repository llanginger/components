import React from "react";
import styled from "styled-components";

import { PropItem } from "./PropItem";
import { StringPropUpdater } from "./propUpdaters/StringPropUpdater";
import { BoolPropUpdater } from "./propUpdaters/BoolPropUpdater";
import { NumPropUpdater } from "./propUpdaters/NumPropUpdater";

export const PropList = props => {
    const Container = styled.div`
    width: 400px;
    height: 100%;
    padding: 0;
    display: flex;
    background-color: rgba(19, 124, 189, 0.10);
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
  `;
    const DocWrapper = styled.ul`
    width: 100%;
    height: 100%;
    list-style-type: none;
    padding: 0px 10px 10px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-y: auto;
  `;

    const DocHeader = styled.div`
    font-size: 25px;
    width: 100%;
  text-align: center;
    padding: 20px 0px;
    background-color: #00bcd4;
    margin-left: 0 auto;
    margin-right: 0 auto;
    color: white;
  `;

    // Probably don't need this anymore
    const renderDocs = () => {
        return props.docs.map((doc, i) => {
            return (
                <PropItem
                    key={i}
                    propName={doc.propName}
                    propType={doc.propType}
                    description={doc.description}
                />
            );
        });
    };

    const mapProps = () => {
        let propArray = [];
        Object.keys(props.propList).forEach((key, i) => {
            const value = props.propList[key];
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

    console.log("Proplist props: ", props);
    Object.keys(props.propList).forEach((key, i) =>
        console.log(key + " " + props.propList[key])
    );

    return (
        <Container>
            <DocHeader>{props.componentName} Props:</DocHeader>
            <DocWrapper>
                {mapProps()}
            </DocWrapper>
        </Container>
    );
};
