import * as React from "react";
import styled from "styled-components";

export const ComponentList = (props: any) => {
    const List = styled.ul`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        position: relative;
        box-sizing: border-box;
        padding: 0px 10px;
        list-style-type: none;
        overflow-y: auto;
    `;

    const Container = styled.div`
        width: 100%;
        height: 100%;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        position: relative;
    `;
    return (
        <Container>
            <List>
                {props.children}
            </List>
        </Container>
    );
};
