import { Box } from '@mui/material'
import { usePlayerStore } from 'store/playerStore'
import { Webcam } from 'components/webcam/webcam'
import { Player } from 'components/player/player'
import { Playlist } from 'components/playlist/playlist'
import { Feedback } from 'components/feedback/feedback'
import { Row } from './styles'

export const MainPage = () => {
  const { isCamera } = usePlayerStore(state => state)

  return (
    <Box>
      <Row>
        {isCamera ? <Webcam /> : <Player />}
        <Playlist />
      </Row>

      <Feedback />
    </Box>
  )
}
