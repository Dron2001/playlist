import { useState } from 'react'
import { Rating } from '@mui/material'
import { usePlayerStore } from 'store/playerStore'
import { Container, Row, Input, AddButton, Avatar, CommentLabel } from './styles'

export const Feedback = () => {
  const [comment, setComment] = useState('')
  const { currentVideo, changeRating, addComment } = usePlayerStore(state => state)

  const onChangeValue = (_, newValue) => changeRating(newValue)

  const handleAddComment = () => {
    if (!comment) return

    addComment(comment)
    setComment('')
  }

  return (
    <Container>
      <Rating value={currentVideo.rating} onChange={onChangeValue} />

      {currentVideo.comment ? (
        <Row>
          <Avatar />

          <CommentLabel>{currentVideo.comment}</CommentLabel>
        </Row>
      ) : (
        <Row>
          <Input placeholder='comment...' value={comment} onChange={e => setComment(e.target.value)} />
          <AddButton variant='outlined' onClick={handleAddComment}>Add</AddButton>
        </Row>
      )}
    </Container>
  )
}
