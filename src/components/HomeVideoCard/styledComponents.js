import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  font-family: 'Roboto';
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const Title = styled.p`
  font-size: 13px;
  color: ${props => props.color};
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const CustomLink = styled(Link)`
  text-decoration: none;
`
export const ChannelName = styled.p`
  font-size: 13px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-size: 12px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
