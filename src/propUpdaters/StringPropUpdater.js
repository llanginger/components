import React from 'react'
import styled from 'styled-components'

import { UPDATE_PROP } from '../actions/actions'
import { store } from '../store'

import { Input } from '@blueprintjs/core'

const Form = styled.form`
  margin-bottom: 20px;
`

export class StringPropUpdater extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = { inputValue: '' }
    this._onSubmit = this._onSubmit.bind(this)
  }
  
  _onSubmit(e) {
    e.preventDefault()
    store.dispatch(UPDATE_PROP(this.props.propName, this.input.value))
  }
  
  render() {
    
    return (
      <Form onSubmit={this._onSubmit}>
        
        <p>{this.props.propName}:</p>
      <input className='pt-input pt-fill' placeholder={this.props.propValue || "I'm an input"} ref={(input) => this.input = input}/>
        </Form>
    )
  }
}