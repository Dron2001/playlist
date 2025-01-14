import { styled, Box } from '@mui/material'

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
