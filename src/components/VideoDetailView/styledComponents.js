import styled from 'styled-components'

export const VideoDetailViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  color: red;
`
