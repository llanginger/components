import * as React from "react";
import styled from "styled-components";

import {} from "@blueprintjs/core";

const TileContainer = styled.div`
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    box-shadow: 6px 6px 27px #888;
    border-top: 10px solid white;
    border-bottom: 10px solid white;
`;

const Tile = styled.div`
    width: 98%;
    height: ${props => props.height || "100px"};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: rgb(121, 199, 227);
    background-color: rgb(26, 49, 119);
    border-radius: 15px;
    margin-bottom: 10px;
`;
const TileColumn = styled.div`
    width: 50%;
    padding: 0px 1%;
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-shrink: 0;
`;

export const TileLayout: any = (props: any) => {
    const randomHeight: (addHeight: number) => string = (
        addHeight: number = 0
    ) => {
        const ranNum = Math.random() * 4;

        if (ranNum <= 1) {
            return (75 + addHeight).toString() + "px";
        } else if (ranNum <= 2) {
            return (100 + addHeight).toString() + "px";
        } else {
            return (125 + addHeight).toString() + "px";
        }
    };

    const generateTiles = (tileNumber: number, height: number) => {
        let tileArray = [];
        for (let i = 0; i < tileNumber; i++) {
            tileArray.push(
                <Tile key={Math.random() * i} height={randomHeight(height)}>
                    I'm a tile!
                </Tile>
            );
        }
        return tileArray;
    };

    return (
        <TileContainer>
            <TileColumn>
                {generateTiles(props.tileNumber || 5, props.extraHeight || 0)}
            </TileColumn>
            <TileColumn>
                {generateTiles(props.tileNumber || 5, props.extraHeight || 0)}
            </TileColumn>
        </TileContainer>
    );
};

TileLayout.defaultProps = {
    tileNumber: 4,
    extraHeight: 10
};
export const TileLayoutBundle = {
    childNode: <TileLayout />,
    componentName: "Tile Layout"
};
