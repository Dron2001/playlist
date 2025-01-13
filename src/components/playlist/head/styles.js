import { Box, styled, TextField, Button } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.border.list}`,
  padding: '8px 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

export const Input = styled(TextField)(() => ({
  flex: 1,

  input: {
    fontSize: '12px',
    fontWeight: '500',
    padding: '12px'
  }
}))

export const AddButton = styled(Button)(() => ({
  marginLeft: '15px',
  fontSize: '12px',
  fontWeight: '500',
  textTransform: 'none'
}))
