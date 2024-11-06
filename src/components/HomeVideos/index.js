import {
  NoVideosVIew,
  NoVideoImge,
  NoVIdeoHeading,
  NoVideoNote,
  RetryButton,
  VideoCardList,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'
import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <WatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? 'e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard videos={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosVIew>
            <NoVideoImge
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVIdeoHeading headingColor={headingColor}>
              No Search results found
            </NoVIdeoHeading>
            <NoVideoNote noteColor={noteColor}>
              Try different key words or remove search filter
            </NoVideoNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosVIew>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default HomeVideos
