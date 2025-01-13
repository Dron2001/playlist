import { useThemeStore } from 'store/themeStore'
import { Container, Body, Logo } from './styles'

export const Header = () => {
  const { mode, toggleMode } = useThemeStore()

  return (
    <Container>
      <Body>
        <Logo>Playlist</Logo>

        <div onClick={toggleMode}>
          Переключить на {mode === 'light' ? 'тёмную' : 'светлую'} тему
        </div>
      </Body>
    </Container>
  )
}
