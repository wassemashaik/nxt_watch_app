import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import WatchContext from '../../context/WatchContext'
import VideoCard from '../VideoCard'
import {
  NoSavedVideos,
  SavedVideoTitle,
  NoSavedVideosImage,
  SavedContainer,
  SavedTitleIconContainer,
  SavedText,
  SavedVideo,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideoList} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={35} color="#ff0b37" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedVideoList.length > 0 ? (
              <SavedVideo>
                {savedVideoList.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideo>
            ) : (
              <NoSavedVideos>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading headingColor={headingColor}>
                  No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideosNote>
              </NoSavedVideos>
            )}
          </SavedContainer>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default SavedVideos
