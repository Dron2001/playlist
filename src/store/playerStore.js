import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const videoList = [
  'https://www.w3schools.com/html/movie.mp4',
  'https://media.w3.org/2010/05/sintel/trailer.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://media.xiph.org/tearsofsteel/tears_of_steel_1080p.webm'
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
    addVideoToList: newVideo => set(state => ({ videoList: [...state.videoList, newVideo] })),
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
