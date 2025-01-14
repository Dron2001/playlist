import { usePlayerStore } from 'store/playerStore'
import { Container, Thumbnail, Title } from './styles'

export const Video = ({ video }) => {
  const { currentVideo, setCurrentVideo } = usePlayerStore(state => state)

  const onChangeVideo = () => setCurrentVideo(video)

  const isActive = currentVideo.source === video.source ? 1 : 0

  return (
    <Container onClick={onChangeVideo} isactive={isActive}>
      <Thumbnail src={video.source} muted preload='metadata' />

      <Title>Video {video.id + 1}</Title>
    </Container>
  )
}
