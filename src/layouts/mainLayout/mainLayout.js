import { Outlet } from 'react-router-dom'
import { Header } from 'components/header/header'
import { Container, Body } from './styles'

export const MainLayout = () => {
  return (
    <Container>
      <Header />

      <Body>
        <Outlet />
      </Body>
    </Container>
  )
}
