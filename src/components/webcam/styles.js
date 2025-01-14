import { styled, Box } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  width: '626px',
  height: '347px',
  border: `1px solid ${theme.palette.customColors.border}`
}))

export const Video = styled('video')({
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

export const Buttons = styled(Box)(() => ({
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const IconButton = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.5
  },

  '&:last-child': {
    marginLeft: '20px'
  }
}))
