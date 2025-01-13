import { styled, Box, Typography } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  padding: '18px 12px',
  flex: 1,
  overflow: 'auto',

  '&::-webkit-scrollbar': {
    width: '8px',
    height: '8px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: theme.palette.primary.dark
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.background.default,
    borderRadius: '4px'
  }
}))

export const VideoContainer = styled(Box)(({ isactive }) => ({
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
