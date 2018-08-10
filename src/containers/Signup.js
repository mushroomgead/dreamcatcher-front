import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../components/base/initial-variables'
import { ButtonSmall, ButtonOutlined, TextInput } from '../components/elements'
import { createUser } from '../actions/userActions';

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

class Signup extends React.Component {

  state = {
    email: '',
    password: '',
    repassword: '',
    username: '',
  }

  _onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  _onClickSignup = () => {
    let { email, password, username } = this.state

    this.props.createUser({ email, password, username })
  }

  render() {
    return (
      <Layout>
        <Grid>
          <TextInput
            type="email"
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
          <TextInput
            type="password"
            name="repassword"
            placeholder="re-passwords"
            value={this.state.repassword}
            onChange={this._onInputChange}
          />
        </Grid>
        <Grid>
          <TextInput
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this._onInputChange}
          />
        </Grid>
        <Grid>
          <ButtonSmall
            title="Signup"
            style={styles.buttonStyle}
            onClick={this._onClickSignup}
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
  createUser: (data) => dispatch(createUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
