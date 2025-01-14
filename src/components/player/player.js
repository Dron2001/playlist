import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { usePlayerStore } from 'store/playerStore'
import { Container, Video } from './styles'

export const Player = () => {
  const {
    isPlaying,
    volume,
    currentVideo,
    setPlaying,
    setVolume,
    playNextVideo
  } = usePlayerStore(state => state)

  const playerRef = useRef(null)
  const videoNodeRef = useRef(null)

  useEffect(() => {
    if (videoNodeRef.current && !playerRef.current) {
      const player = videojs(videoNodeRef.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        sources: [{ src: currentVideo, type: 'video/mp4' }]
      })

      playerRef.current = player

      const handleVolumeChange = () => setVolume(player.volume())

      const handlePlayPause = () => {
        if (player.ended()) return

        setPlaying(!player.paused())
      }

      const handleVideoEnd = () => playNextVideo()

      player.on('volumechange', handleVolumeChange)
      player.on('play', handlePlayPause)
      player.on('pause', handlePlayPause)
      player.on('ended', handleVideoEnd)

      return () => {
        if (playerRef.current) {
          playerRef.current.dispose()
        }
      }
    }
  }, [])

  useEffect(() => {
    if (playerRef.current) {
      const player = playerRef.current

      if (currentVideo !== player.currentSrc()) {
        player.src({ src: currentVideo, type: 'video/mp4' })
        player.load()
      }

      if (isPlaying) {
        player.play()
      } else {
        player.pause()
      }
    }
  }, [currentVideo, isPlaying])

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.volume(volume)
    }
  }, [volume])

  return (
    <Container>
      <Video ref={videoNodeRef} className="video-js vjs-default-skin" />
    </Container>
  )
}
