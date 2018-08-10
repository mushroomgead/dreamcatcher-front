import React from 'react';
import styled from 'styled-components'
import { Colors } from '../base/initial-variables'

const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${Colors.greyLight};
  padding-left: 10px;
`

export const TextInput = (props) => {
  return <Input {...props} />
}
