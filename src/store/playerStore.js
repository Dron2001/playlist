import { create } from 'zustand'

const videoList = [
  'https://www.w3schools.com/html/movie.mp4',
  'https://media.w3.org/2010/05/sintel/trailer.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://media.xiph.org/tearsofsteel/tears_of_steel_1080p.webm'
]

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  volume: 1,
  currentVideo: videoList[0],
  videoList,
  setPlaying: isPlaying => set({ isPlaying }),
  setVolume: volume => set({ volume }),
  setCurrentVideo: video => set({ currentVideo: video }),
  addVideoToList: newVideo => set(state => ({ videoList: [...state.videoList, newVideo] }))
}))
