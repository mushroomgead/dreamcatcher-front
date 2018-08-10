import React from 'react'
import styled from 'styled-components'

import { Colors } from '../base/initial-variables'

const ButtonSmallStyle = styled.div`
  display: flex;
  background: ${Colors.cyan};
  color: ${Colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {

  }
`
const ButtonOutlinedStyle = styled.div`
  display: flex;
  border: 1px solid ${Colors.cyan};
  background: ${Colors.white};
  color: ${Colors.cyan};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    // background: ${Colors.cyan};
    // color: ${Colors.white};
  }
`

export const ButtonSmall  = (props) => {
  return <ButtonSmallStyle {...props}>
    {props.title}
  </ButtonSmallStyle>
}


export const ButtonOutlined  = (props) => {
  return <ButtonOutlinedStyle {...props}>
    {props.title}
  </ButtonOutlinedStyle>
}

// ButtonSmall
// ButtonMedium
// ButtonLarge
