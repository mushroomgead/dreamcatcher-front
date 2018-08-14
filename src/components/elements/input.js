import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Colors } from '../base/initial-variables'

const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${Colors.greyLight};
  padding-left: 14px;
`
const PasswordInput = styled.input`
  outline: none;
  border: none;
  width: 80%;
`
const WrapInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${Colors.greyLight};
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: ${props => props.color ? props.color : Colors.greyLight};
  cursor: pointer;
`

export class TextInput extends React.Component {

  state = {
    hidePassword: true
  }

  _hideSecureText = () => {
    this.setState({ hidePassword: !this.state.hidePassword })
  }

  render() {
    if (this.props.type === 'password') {
      if (this.state.hidePassword) {
        return <WrapInput>
          <PasswordInput {...this.props} />
          <FontAwesomeIconStyled icon="eye" onClick={this._hideSecureText} />
        </WrapInput>
      }
      return <WrapInput>
        <PasswordInput
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <FontAwesomeIconStyled icon="eye-slash" onClick={this._hideSecureText} />
      </WrapInput>
    }
    return <Input {...this.props} />
  }
}
