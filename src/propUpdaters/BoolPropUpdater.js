import React from 'react'
import styled from 'styled-components'

import { UPDATE_PROP } from '../actions/actions'
import { store } from '../store'

import { 
  Input,
  Menu,
  MenuItem,
  Popover,
  Button,
  Position
} from '@blueprintjs/core'

const Container = styled.div`
  margin-bottom: 20px;

  & span {
    display: block !important;
  }
`
const Title = styled.p`
  margin-bottom: 10px;
`

export const BoolPropUpdater = props => {
   
    return (
      <Container>
        <Title>{props.propName}:</Title>
        <Popover 
          content={
            <Menu>
              <MenuItem 
                text='true'
                onClick={() => store.dispatch(UPDATE_PROP(props.propName, true))}
              />
              <MenuItem 
                text='false'
                onClick={() => store.dispatch(UPDATE_PROP(props.propName, false))}
              />
            </Menu>
          }
          className='pt-fill'
          position={Position.BOTTOM}
        >
          <Button
            text={props.propValue.toString()}
            className='pt-button pt-fill'
            style={{ textAlign: 'left'}}
          />
        </Popover>
      </Container>
    )

}