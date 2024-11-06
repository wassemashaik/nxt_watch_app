import React from 'react'

const WatchContext = React.createContext({
  isDarkTheme: false,
  savedVideoList: [],
  addVideo: () => {},
  deleteVideo: () => {},
  toggleTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
})

export default WatchContext
