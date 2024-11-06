import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import WatchContext from './context/WatchContext'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoDetailView from './components/VideoDetailView'
import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideoList: [],
    activeTab: 'Home',
  }

  addVideo = video => {
    const {savedVideoList} = this.state
    const index = savedVideoList.findIndex(
      eachVideo => eachVideo.id === video.id,
    )
    if (index === -1) {
      this.setState({savedVideoList: [...savedVideoList, video]})
    } else {
      savedVideoList.splice(index, 1)
      this.setState({savedVideoList})
    }
    console.log('added video')
  }

  removeVideo = id => {
    const {savedVideoList} = this.state
    const updatedSavedVideos = savedVideoList.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.set({savedVideoList: updatedSavedVideos})
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme, savedVideoList, activeTab} = this.state
    return (
      <WatchContext.Provider
        value={{
          isDarkTheme,
          savedVideoList,
          activeTab,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
          deleteVideo: this.deleteVideo,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}
export default App
