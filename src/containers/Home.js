import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { I18n, Trans } from 'react-i18next';
import compose from 'lodash/fp/compose';
import { Colors } from '../components/base/initial-variables'
import { loadState } from '../utility/localStorage'
import { ButtonSmall, ButtonOutlined } from '../components/elements'
import Logo from '../assets/Images/Logo.png'
import { forceLogout } from '../actions/authActions'

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

const StyledLink = styled(Link)`
  text-decoration: none
`

const Body = styled.div`
  width: 100%;
  height: 1200px;
  background: -webkit-linear-gradient(#39b0ff,#6dd5fa00);
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

  _logout = () => {
    this.props.forceLogout()
    this.props.history.push('/')
  }

  _renderButtonByAuth = (t) => {
    if (loadState('token')) {
      return <Grid position='flex-end'>
        <ButtonOutlined
          onClick={this._logout}
          title="Logout"
          style={styles.buttonStyle}
        />
      </Grid>
    }
    return <Grid position='flex-end'>
      <ButtonSmall
        onClick={this._redirect('/login')}
        title={t('login')}
        style={styles.buttonStyle}
      />
      <ButtonOutlined
        onClick={this._redirect('/signup')}
        title={t('signup')}
        style={styles.buttonStyle}
      />
    </Grid>
  }

  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <Layout>
              <NavBar>
                <Grid>
                  <Image />
                  <StyledLink to="/" replace>
                    <TextLogo>
                      DREAMCATCHER
                    </TextLogo>
                  </StyledLink>
                </Grid>
                {this._renderButtonByAuth(t)}
                {/* <button onClick={() => i18n.changeLanguage('th')}>th</button>
                <button onClick={() => i18n.changeLanguage('en')}>en</button> */}
              </NavBar>
              <Body>
              </Body>
            </Layout>
          )
        }
      </I18n>
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  forceLogout: () => dispatch(forceLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
