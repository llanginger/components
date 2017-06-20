import React from 'react'
import styled from 'styled-components'

import { Collapse, Button } from '@blueprintjs/core'
import { PropItem } from './PropItem'
import { HIDE_DOCS, SHOW_DOCS, TOGGLE_DOCS } from './actions/actions'

import { store } from './store'

const dummyDoc = [{ 
  description: "Describes text color",
  propName: "color",
  propType: "string"
}]

const PropList = props => {
  const Container = styled.div`
    width: 40%;
    height: 100%;
    background-color: #0097a7;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
  `
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
  `

  const DocHeader = styled.div`
    font-size: 25px;
    width: 100%;
    text-align: center;
    padding: 20px 0px;
    background-color: #00bcd4;
    margin-left: 0 auto;
    margin-right: 0 auto;
    color: white;
  `

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
  
  console.log('Proplist props: ', props)

  return (
    <Container>
      <DocHeader>{props.componentName} Props:</DocHeader>
      <DocWrapper>
        {renderDocs()}
      </DocWrapper>
    </Container>
  );
};


export const InlinePropList = props => {  
  return (
    <div>
        <Button onClick={() => store.dispatch(TOGGLE_DOCS())} >Open/close</Button>
        <Collapse isOpen={store.getState().docsReducer.showDocs}>
          <PropList docs={dummyDoc} />
        </Collapse>

    </div>
  )    
}