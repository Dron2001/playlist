import { styled, Box, TextField, Button, Typography } from '@mui/material'

export const Container = styled(Box)(() => ({
  marginTop: '30px'
}))

export const Row = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px'
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

export const Avatar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.text,
  width: '40px',
  height: '40px',
  borderRadius: '50%'
}))

export const CommentLabel = styled(Typography)(({ theme }) => ({
  marginLeft: '10px',
  color: theme.palette.customColors.text,
  fontWeight: '500',
  fontSize: '14px'
}))
