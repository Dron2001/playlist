import { Player } from 'components/player/player'
import { Playlist } from './playlist/playlist'
import { Container } from './styles'

export const MainPage = () => {
  return (
    <Container>
      <Player />
      <Playlist />
    </Container>
  )
}
