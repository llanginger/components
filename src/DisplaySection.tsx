import * as React from "react";
import styled from "styled-components";

import { store, Reducers } from "./store";
import { connect } from "react-redux";

interface CDProps {
    currentComponent: any;
}

const _DisplaySection = (props: CDProps) => {
    console.log("Display Section Props: ", props);

    const DSection = styled.div`
        width: 80%;
        height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    `;

    const CompFrame = styled.div`
        width: 90%;
        height: 90%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const Frame = styled.div`
        box-shadow: 3px 3px 10px #888;
        max-width: 100%
    `;

    return (
        <DSection>
            <CompFrame>
                {props.currentComponent}
            </CompFrame>
        </DSection>
    );
};

const mapStateToProps = (state: Reducers) => {
    return {
        currentComponent: state.componentReducer.component
    };
};

export const DisplaySection = connect(mapStateToProps, {})(_DisplaySection);

// return (
//         <Container onClick={() => console.log("Display props: ", props)}>
//             Hello there
//         </Container>
//     );
