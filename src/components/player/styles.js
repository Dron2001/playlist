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
