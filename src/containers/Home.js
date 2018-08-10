import React from 'react';
import styled from 'styled-components';
import { Colors } from '../components/base/initial-variables'
import { ButtonSmall, ButtonOutlined } from '../components/elements'
import Logo from '../assets/Images/Logo.png'

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
`;

const NavBar = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

const Grid = styled.div`
  margin: 5px;
  flex: 1;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: ${props => props.position ? props.position : 'flex-start'};
`;

const Body = styled.div`
  width: 100%;
  height: 800px;
  background: ${Colors.cyan};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextLogo = styled.h1`
  font-size: 16px;
  background: -webkit-linear-gradient(#0082d8, #6dd5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Image = styled.span`
  background-image: url('${Logo}');
  width: 80px;
  height: 80px;
  background-size: contain;
`;

const Text = styled.h1`
  font-size: 60px;
  color: ${Colors.white}
`;

class Home extends React.Component {

  _redirect = (route) => () => {
    this.props.history.push(`${route}`)
  }

  render() {
    return (
      <Layout>
        <NavBar>
          <Grid>
            <Image />
            <TextLogo>
              DREAMCATCHER
            </TextLogo>
          </Grid>
          <Grid position='flex-end'>
            <ButtonSmall
              onClick={this._redirect('/login')}
              title="Login"
              style={styles.buttonStyle}
            />
            <ButtonOutlined
              onClick={this._redirect('/signup')}
              title="Signup"
              style={styles.buttonStyle}
            />
          </Grid>
        </NavBar>
        <Body>
          <Text>HELLO WORLD~</Text>
        </Body>
      </Layout>
    );
  }
}

export default Home
