import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.bgColor}
  align-items: center;
  min-height: 92vh;
  margin-tp: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NotFoundVideosHeading = styled.h1`
  font-size: 25px;
  text-align: center;
  color: ${props => props.headingColor};
`
export const NotFoundVideosNote = styled.p`
  color: ${props => props.noteColor};
  font-size: 18px;
  text-align: center;
`
