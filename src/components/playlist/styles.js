import { Box, styled } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.list,
  flex: 1,
  marginLeft: '23px',
  border: `1px solid ${theme.palette.border.list}`,
  height: '345px',
  display: 'flex',
  flexDirection: 'column'
}))
