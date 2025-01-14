import { useState } from 'react'
import { Switch } from '@mui/material'
import { usePlayerStore } from 'store/playerStore'
import { Container, Row, Input, AddButton, SwitchContainer, Title } from './styles'

export const Head = () => {
  const [url, setUrl] = useState('')
  const { addVideoToList, isCamera, setIsCamera, setPlaying } = usePlayerStore(state => state)

  const isValidUrl = url => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const handleAddVideo = () => {
    if (url.trim() && isValidUrl(url)) {
      addVideoToList(url.trim())
      setUrl('')
    } else {
      alert('Please enter a valid URL')
    }
  }

  const onChangeIsCamera = () => {
    setIsCamera(!isCamera)
    setPlaying(false)
  }

  return (
    <Container>
      <Row>
        <Input placeholder='link..' value={url} onChange={e => setUrl(e.target.value)} />

        <AddButton variant='contained' onClick={handleAddVideo}>Add</AddButton>
      </Row>

      <SwitchContainer>
        <Title>Webcam:</Title>
        <Switch checked={isCamera} onChange={onChangeIsCamera} />
      </SwitchContainer>
    </Container>
  )
}
