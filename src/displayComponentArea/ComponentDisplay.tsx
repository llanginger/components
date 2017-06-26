import * as React from "react";
import styled from "styled-components";

import { PropList } from "./PropList";
import { DisplaySection } from "./DisplaySection";
import { store, Reducers } from "../store";
import { connect } from "react-redux";

export const ComponentDisplay = props => {
    console.log(props);

    const Container = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        position: relative;
        align-items: center;
    `;
    const Frame = styled.div`
        box-shadow: 3px 3px 10px #888;
        max-width: 100%
    `;

    return (
        <Container onClick={() => console.log("Display props: ", props)}>
            <DisplaySection />
        </Container>
    );
};

// return (
//         <Container onClick={() => console.log("Display props: ", props)}>
//             Hello there
//         </Container>
//     );
