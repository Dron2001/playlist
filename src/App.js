import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { useThemeStore } from 'store/themeStore'
import { getTheme } from 'theme/theme'
import { router } from 'router/router'

export const App = () => {
  const { mode } = useThemeStore()

  const theme = useMemo(() => getTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
