import { usePlayerStore } from 'store/playerStore'
import { Container, VideoContainer, Thumbnail, Title } from './styles'

export const List = () => {
  const { currentVideo, videoList, setCurrentVideo } = usePlayerStore(state => state)

  return (
    <Container>
      {videoList.map((source, index) => (
        <VideoContainer key={index} onClick={() => setCurrentVideo(source)} isactive={currentVideo === source ? 1 : 0}>
          <Thumbnail src={source} muted preload='metadata' />

          <Title>Video {index + 1}</Title>
        </VideoContainer>
      ))}
    </Container>
  )
}
