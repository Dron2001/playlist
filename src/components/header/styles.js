import { Box, styled, Typography, ToggleButton } from '@mui/material'

export const Container = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.customColors.header
}))

export const Body = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '14.48px 30px'
}))

export const Logo = styled(Typography)(({ theme }) => ({
  color: theme.palette.customColors.text,
  fontWeight: '600',
  fontSize: '36px'
}))

export const ToggleButtonStyled = styled(ToggleButton)(() => ({
  textTransform: 'none',

  svg: {
    marginRight: '10px'
  }
}))
