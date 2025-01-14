import { styled, Box } from '@mui/material'

export const Container = styled(Box)(() => ({
  flex: 1,
  overflowY: 'auto'
}))

export const Body = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '35px auto',
  padding: '0 30px'
}))
