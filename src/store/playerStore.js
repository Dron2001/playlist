import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const videoList = [
  {
    id: 0,
    source: 'https://www.w3schools.com/html/movie.mp4'
  },
  {
    id: 1,
    source: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
  },
  {
    id: 2,
    source: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 3,
    source: 'https://media.xiph.org/tearsofsteel/tears_of_steel_1080p.webm'
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
    addVideoToList: newVideo => set(state => {
      const lastVideo = state.videoList[state.videoList.length - 1]

      return { videoList: [...state.videoList, { id: lastVideo.id + 1, source: newVideo }] }
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
