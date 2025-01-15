import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const videoList = [
  {
    id: 0,
    source: 'https://www.w3schools.com/html/movie.mp4',
    rating: 0,
    comment: ''
  },
  {
    id: 1,
    source: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    rating: 0,
    comment: ''
  },
  {
    id: 2,
    source: 'https://www.w3schools.com/html/mov_bbb.mp4',
    rating: 0,
    comment: ''
  },
  {
    id: 3,
    source: 'https://media.xiph.org/tearsofsteel/tears_of_steel_1080p.webm',
    rating: 0,
    comment: ''
  }
]

export const usePlayerStore = create(persist(
  set => ({
    isPlaying: false,
    volume: 1,
    isCamera: false,
    currentVideo: videoList[0],
    videoList,
    setPlaying: isPlaying => set({ isPlaying }),
    setVolume: volume => set({ volume }),
    setCurrentVideo: currentVideo => set({ currentVideo }),
    changeRating: rating => set(state => {
      const currentVideo = { ...state.currentVideo, rating }

      const videoList = state.videoList.map(video => (video.id === currentVideo.id ? currentVideo : video))

      return { currentVideo, videoList }
    }),
    addComment: comment => set(state => {
      const currentVideo = { ...state.currentVideo, comment }

      const videoList = state.videoList.map(video => (video.id === currentVideo.id ? currentVideo : video))

      return { currentVideo, videoList }
    }),
    addVideoToList: source => set(state => {
      const lastVideo = state.videoList[state.videoList.length - 1]
      const newVideo = { id: lastVideo.id + 1, source, rating: 0, comment: '' }

      return { videoList: [...state.videoList, newVideo ] }
    }),
    setIsCamera: isCamera => set({ isCamera }),
    playNextVideo: () => set(state => {
      const currentIndex = state.videoList.indexOf(state.currentVideo)
      const nextIndex = currentIndex < state.videoList.length - 1 ? currentIndex + 1 : currentIndex

      return { currentVideo: state.videoList[nextIndex] }
    })
  }),
  {
    name: 'player-store',
    partialize: state => ({
      volume: state.volume,
      isCamera: state.isCamera,
      currentVideo: state.currentVideo,
      videoList: state.videoList
    })
  }
))
