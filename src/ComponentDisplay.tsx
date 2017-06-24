import * as React from "react";
import styled from "styled-components";

import { PropList } from "./PropList";
import { store } from "./store";

export const ComponentDisplay = (props: any) => {
    console.log(props);

    const Container = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        position: relative;
        align-items: center;
    `;

    const DisplaySection = styled.div`
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
    const currentComponent = store.getState().componentReducer;

    return (
        <Container onClick={() => console.log("Display props: ", props)}>
            <PropList
                propList={currentComponent.component.props}
                componentName={currentComponent.name}
            />
            <DisplaySection>
                <CompFrame>
                    {currentComponent.component}
                </CompFrame>
            </DisplaySection>
        </Container>
    );
};

// return (
//         <Container onClick={() => console.log("Display props: ", props)}>
//             Hello there
//         </Container>
//     );
