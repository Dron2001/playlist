import { usePlayerStore } from 'store/playerStore'
import { Webcam } from 'components/webcam/webcam'
import { Player } from 'components/player/player'
import { Playlist } from 'components/playlist/playlist'
import { Container } from './styles'

export const MainPage = () => {
  const { isCamera } = usePlayerStore(state => state)

  return (
    <Container>
      {isCamera ? <Webcam /> : <Player />}
      <Playlist />
    </Container>
  )
}
