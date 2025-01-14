import { useEffect, useRef, useState } from 'react'
import videojs from 'video.js'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import StopIcon from '@mui/icons-material/Stop'
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone'
import 'video.js/dist/video-js.css'
import { Container, Video, Buttons, IconButton } from './styles'

export const Webcam = () => {
  const [recording, setRecording] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const mediaRecorderRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, { autoplay: true, controls: false })

      const startWebcam = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })

          videoRef.current.srcObject = stream

          mediaRecorderRef.current = new MediaRecorder(stream)

          mediaRecorderRef.current.ondataavailable = event => {
            const url = URL.createObjectURL(event.data)
            setVideoUrl(url)
          }
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

  const startRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.start()

      setVideoUrl('')
      setRecording(true)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()

      setRecording(false)
    }
  }

  const downloadVideo = () => {
    if (videoUrl) {
      const link = document.createElement('a')
      link.href = videoUrl
      link.download = 'recorded-video.webm'
      link.click()
    }
  }


  return (
    <Container>
      <Video ref={videoRef} className='video-js vjs-default-skin' playsInline />

      <Buttons>
        {recording ? (
          <IconButton>
            <StopIcon onClick={stopRecording} color='error' fontSize='large' />
          </IconButton>
        ) : (
          <IconButton>
            <FiberManualRecordIcon onClick={startRecording} color='error' fontSize='large' />
          </IconButton>
        )}

        {videoUrl && (
          <IconButton onClick={downloadVideo}>
            <CloudDownloadTwoToneIcon color='primary' fontSize='large' />
          </IconButton>
        )}
      </Buttons>
    </Container>
  )
}
