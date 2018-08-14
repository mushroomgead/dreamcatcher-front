import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { tada } from 'react-animations'
import { Colors } from '../components/base/initial-variables'
import { loadState } from '../utility/localStorage'
import { ButtonSmall, ButtonOutlined } from '../components/elements'
import { CardPublic, CardPrivate } from '../components'
import Logo from '../assets/Images/Logo.png'
import { forceLogout } from '../actions/authActions'
import { getDreamList, removeDream, updateData } from '../actions/dreamsActions'

const tadaAnimation = keyframes`${tada}`;

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
  border-radius: 5px;
  margin: 5px;
  flex: 1;
  flex-direction: ${props => props.direction ? props.direction : 'row'}
  display: flex;
  align-items: ${props => props.positionVertical ? props.positionVertical : 'center'}
  justify-content: ${props => props.positionHorizontal ? props.positionHorizontal : 'flex-start'};
  align-self: ${props => props.alignSelf ? props.alignSelf : 'center'}
`;

const StyledLink = styled(Link)`
  text-decoration: none
`

const Body = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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

const ContainerIcon = styled.div`
  padding: 7px;
  letter-spacing: 0.5px;
`

const CardIcon = styled.div`
  padding: 10px;
  &:hover {
    animation: 1s ${tadaAnimation};
  }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${props => props.color ? props.color :' #f3f1f1'};
`
const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ContainerAdd = styled.div`
  background: ${Colors.greyLight};
  width: 100%;
  height: 124px;
  margin-right: 9px;
`

class Dashboard extends React.Component {

  state = {
    checked: false
  }

  componentDidMount() {
    this.props.getDreamList()
  }

  // shouldComponentUpdate(nextProps) {
  //   console.log(nextProps.response !== this.props.response, '!==');
  //   console.log(nextProps.response, this.props.response, 'nextProps.response, this.props.response');

  //   if (nextProps.response !== this.props.response) {
  //     return true
  //   }
  //   return false
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.response !== this.props.response) {
  //     this.props.getDreamList()
  //   }
  // }

  _logout = () => {
    this.props.forceLogout()
    this.props.history.push('/')
  }

  _renderButtonByAuth = () => {
    if (loadState('token')) {
      return <Grid positionHorizontal='flex-end'>
        <ButtonOutlined
          onClick={this._logout}
          title="Logout"
          style={styles.buttonStyle}
        />
      </Grid>
    }
    return <Grid positionHorizontal='flex-end'>
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
  }

  _renderPublicDream = () => {
    let DreamList = this.props.response

    return DreamList.map(value =>
      <CardPublic
        key={value._id}
        icon={
          <ContainerIcon>
            <ReactTooltip />
            <CardIcon>
              <p data-tip="Join dream">
                <FontAwesomeIconStyled icon="sign-in-alt" color={Colors.cyan} onClick={() => alert('4')} />
              </p>
            </CardIcon>
          </ContainerIcon>
        }
        title={value.title}
        description={value.description}
        authour = {value.authour}
      />
    )
  }

  _renderMyDream = () => {
    let MyDreamList = this.props.response

    return MyDreamList.map(value =>
      <CardPrivate
        key={value._id}
        icon={
          <ContainerIcon>
            <CardIcon>
              <FontAwesomeIconStyled
                icon="share"
                color="#005f9e"
                onClick={() => alert('Share to public')}
              />
            </CardIcon>
            <CardIcon>
              <FontAwesomeIconStyled
                icon="check"
                color={value.checked ? "#36a700" : "#9e9e9e"}
                onClick={() => this.props.updateData(value._id, { checked: !value.checked })}
              />
            </CardIcon>
            <CardIcon>
              <FontAwesomeIconStyled
                icon="trash-alt"
                color="#ff253a"
                onClick={() => this.props.removeDream(value._id)}
              />
            </CardIcon>
          </ContainerIcon>
        }
        title={value.title}
        description={value.description}
      />
    )
  }

  render() {
    return (
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
          {this._renderButtonByAuth()}
        </NavBar>
        <Body>
          <ContainerAdd>

          </ContainerAdd>
          <ContainerCard>
            {this._renderMyDream()}
          </ContainerCard>
          {/* <ContainerCard>
            {this._renderPublicDream()}
          </ContainerCard> */}
        </Body>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state.dreamlist.response
})

const mapDispatchToProps = (dispatch) => ({
  forceLogout: () => dispatch(forceLogout()),
  getDreamList: () => dispatch(getDreamList()),
  removeDream: (id) => dispatch(removeDream(id)),
  updateData: (id, dataUpdate) => dispatch(updateData(id, dataUpdate)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
