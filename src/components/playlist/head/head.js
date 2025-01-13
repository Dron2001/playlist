import { useState } from 'react'
import { usePlayerStore } from 'store/playerStore'
import { Container, Input, AddButton } from './styles'

export const Head = () => {
  const [url, setUrl] = useState('')
  const { addVideoToList  } = usePlayerStore(state => state)

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
      alert('Введите корректный URL')
    }
  }

  return (
    <Container>
      <Input placeholder='link..' value={url} onChange={e => setUrl(e.target.value)} />

      <AddButton variant='contained' onClick={handleAddVideo}>Add</AddButton>
    </Container>
  )
}
