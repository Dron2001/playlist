import { usePlayerStore } from 'store/playerStore'
import { Video } from './video/video'
import { Container } from './styles'

export const List = () => {
  const { videoList } = usePlayerStore(state => state)

  return (
    <Container>
      {videoList.map((video, index) => <Video key={index} video={video} />)}
    </Container>
  )
}
