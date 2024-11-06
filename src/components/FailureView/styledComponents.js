import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  font-family: 'Roboto';
`

export const FailedImage = styled.img`
  width: 208px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailedHeading = styled.h1`
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const FailedNote = styled.p`
  color: ${props => props.noteColor};
  font-size: 18px;
  text-align: center;
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #fff;
  padding: 5px 10px;
  font-size: 15px;
`
