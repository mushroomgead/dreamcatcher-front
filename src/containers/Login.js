import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../components/base/initial-variables'
import { ButtonSmall, ButtonOutlined, TextInput } from '../components/elements'
import { getCredential } from '../actions/authActions';

const styles = {
  buttonStyle: {
    width: 80,
    height: 40,
    marginRight: 10
  }
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  margin: 0 auto;
`;

const Grid = styled.div`
  margin: 5px;
  flex: 1;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: ${props => props.position ? props.position : 'flex-start'};
`;

class Login extends React.Component {

  state = {
    email: '',
    password: '',
  }

  _onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  _onClickLogin = () => {
    let { email, password } = this.state
    this.props.getCredential({ email, password })
  }

  render() {
    return (
      <Layout>
        <Grid>
          <TextInput
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this._onInputChange}
          />
        </Grid>
        <Grid>
          <TextInput
            type="password"
            name="password"
            placeholder="passwords"
            value={this.state.password}
            onChange={this._onInputChange}
          />
        </Grid>
        <Grid>
          <ButtonSmall
            title="Login"
            style={styles.buttonStyle}
            onClick={this._onClickLogin}
          />
          <ButtonOutlined
            title="ย้อนกลับ"
            style={styles.buttonStyle}
            // onClick={this._onClickSignup}
          />
        </Grid>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  getCredential: (data) => dispatch(getCredential(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
