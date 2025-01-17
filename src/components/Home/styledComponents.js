import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 68px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  color: red;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`
export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const BannerButton = styled.button`
  padding-left: 10px;
  padding: 5px 10px;
  border: 1px solid #000;
  color: #000;
  background: none;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
`
export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
`
