import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  flex: 1 0 40%;
  width: 100%;
  height: 137px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #45a0f24d;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: -2px 0px 25px -3px rgba(235,235,235,1);
  }
`;

const CardPrivateStyled = styled.div`
  flex: 1 0 40%;
  width: 100%;
  height: 137px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px dashed #005f9e;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: -2px 0px 25px -3px rgba(235,235,235,1);
  }
`;

const CardHeaderTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 35px;
`;

const CardDescription = styled.div`
  font-size: 15px;
  color: #585858;
`;

const CardAuthour = styled.div`
  line-height: 35px;
  font-size: 14px;
`;

const Grid = styled.div`
  padding: 7px;
  letter-spacing: 0.5px;
`;

const CardPublic = ({ icon, title, description, authour }) => {
  return <CardStyled>
    {icon}
    <Grid>
      <CardHeaderTitle>
        {title}
      </CardHeaderTitle>
      <CardDescription>
        {description}
      </CardDescription>
      <CardAuthour>
        {authour}
      </CardAuthour>
    </Grid>
  </CardStyled>
}

const CardPrivate = ({ icon, title, description }) => {
  return <CardPrivateStyled>
    {icon}
    <Grid>
      <CardHeaderTitle>
        {title}
      </CardHeaderTitle>
      <CardDescription>
        {description}
      </CardDescription>
    </Grid>
  </CardPrivateStyled>
}

export {
  CardPublic,
  CardPrivate
}
