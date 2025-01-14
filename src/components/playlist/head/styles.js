import { Box, styled, TextField, Button, Typography } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.border.list}`,
  padding: '8px 12px'
}))

export const Row = styled(Box)(() => ({
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

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.customColors.text,
  fontWeight: '500',
  fontSize: '14px',
  marginRight: '12px'
}))

export const SwitchContainer = styled(Row)(() => ({
  marginTop: '10px',
  justifyContent: 'flex-start'
}))
