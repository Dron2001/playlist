import { createTheme } from '@mui/material/styles'

const baseTheme = {
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0
        },
        a: {
          textDecoration: 'none'
        },
        li: {
          listStyle: 'none'
        },
        'html, body, #root': {
          height: '100%'
        },
        '#root': {
          display: 'flex'
        }
      }
    }
  }
}

const palettes = {
  light: {
    background: {
      default: '#F3F4F6',
      list: '#FFFFFF'
    },
    customColors: {
      header: '#F9FAFB',
      text: '#111827',
      border: '#D1D5DB'
    },
    border: {
      list:'#E5E7EB'
    }
  },
  dark: {
    background: {
      default: '#121214',
      list: '#19191C'
    },
    customColors: {
      header: '#202024',
      text: '#F9FAFB'
    },
    border: {
      list:'#121214'
    }
  }
}

export const getTheme = mode => createTheme({ ...baseTheme, palette: { mode, ...palettes[mode] } })
