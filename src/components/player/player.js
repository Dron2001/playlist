import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { usePlayerStore } from 'store/playerStore'
import { Container, Video } from './styles'

export const Player = () => {
  const { isPlaying, volume, currentVideo, setPlaying, setVolume } = usePlayerStore(state => state)
  const playerRef = useRef(null)
  const videoNodeRef = useRef(null)

  useEffect(() => {
    const player = videojs(videoNodeRef.current, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      sources: [{ src: currentVideo, type: 'video/mp4' }]
    })

    const handleVolumeChange = () => setVolume(player.volume())

    const handlePlayPause = () => setPlaying(!player.paused())

    player.on('volumechange', handleVolumeChange)
    player.on('play', handlePlayPause)
    player.on('pause', handlePlayPause)

    playerRef.current = player

    return () => {
      if (playerRef.current) playerRef.current.dispose()
    }
  }, [currentVideo, setPlaying, setVolume])

  useEffect(() => {
    if (playerRef.current) playerRef.current.volume(volume)
  }, [volume])

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.play()
      } else {
        playerRef.current.pause()
      }
    }
  }, [isPlaying])

  return (
    <Container>
      <Video ref={videoNodeRef} className='video-js vjs-default-skin' />
    </Container>
  )
}
