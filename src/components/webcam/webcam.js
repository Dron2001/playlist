import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { Container, Video } from './styles'

export const Webcam = () => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, { autoplay: true, controls: true })

      const startWebcam = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })

          videoRef.current.srcObject = stream
        } catch (error) {
          console.error(error)
        }
      }

      startWebcam()
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
      }

      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks()

        tracks.forEach(track => track.stop())
      }
    }
  }, [])

  return (
    <Container>
      <Video ref={videoRef} className='video-js vjs-default-skin' playsInline />
    </Container>
  )
}
