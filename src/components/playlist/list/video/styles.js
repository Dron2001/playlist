import { styled, Box, Typography } from '@mui/material'

export const Container = styled(Box)(({ isactive }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '17px',
  opacity: isactive ? 0.5 : 1,
  cursor: 'pointer',

  '&:last-child': {
    marginBottom: 0
  },

  '&:hover': {
    opacity: 0.5
  }
}))

export const Thumbnail = styled('video')(() => ({
  objectFit: 'cover',
  width: '82px',
  height: '51px',
  borderRadius: '6px'
}))

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.customColors.text,
  fontWeight: '500',
  fontSize: '12px',
  marginLeft: '12px'
}))
