import * as React from "react";
import styled from "styled-components";
import { Button } from "@blueprintjs/core";
import { Reducers } from "../store";
import { connect } from "react-redux";
import { ComponentButton, EditorButton } from "./MenuButtons";

export const NavBar = (props: any) => {
    return (
        <div
            style={{ width: "100%", padding: "10px 10px 0px 10px" }}
            className="pt-button-group pt-fill pt-large"
        >
            <ComponentButton />
            <EditorButton />
        </div>
    );
};
