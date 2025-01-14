import { ToggleButtonGroup } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useThemeStore } from 'store/themeStore'
import { Container, Body, Logo, ToggleButtonStyled } from './styles'

export const Header = () => {
  const { mode, toggleMode } = useThemeStore()

  return (
    <Container>
      <Body>
        <Logo>Playlist</Logo>

        <ToggleButtonGroup color='primary' value={mode} exclusive onChange={toggleMode}>
          <ToggleButtonStyled value='light'>
            <LightModeIcon /> Light
          </ToggleButtonStyled>

          <ToggleButtonStyled value='dark'>
            <DarkModeIcon /> Dark
          </ToggleButtonStyled>
        </ToggleButtonGroup>
      </Body>
    </Container>
  )
}
