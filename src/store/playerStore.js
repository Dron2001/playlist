import { create } from 'zustand'

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  volume: 1,
  currentVideo: 'https://www.w3schools.com/html/movie.mp4',
  videoList: [
    'https://www.w3schools.com/html/movie.mp4',
    'https://www.w3schools.com/html/movie2.mp4',
    'https://www.w3schools.com/html/movie3.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4'
  ],
  setPlaying: isPlaying => set({ isPlaying }),
  setVolume: volume => set({ volume }),
  setCurrentVideo: video => set({ currentVideo: video })
}))
