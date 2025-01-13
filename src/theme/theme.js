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
        }
      }
    }
  }
}

const palettes = {
  light: {
    // veryDarkGray: '#121214',
    // darkGray: '#181819',
    // darkSlate: '#24262A',
    // charcoalGray: '#19191C',
    // mediumGray: '#6B7280',
    // lightGray: '#9CA3AF',
    // offWhiteGray: '#D1D5DB',
    // lightOffWhite: '#E5E7EB',
    // veryLightGray: '#F3F4F6',
    // nearWhite: '#F9FAFB',
    background: {
      default: '#F3F4F6'
    },
    customColors: {
      header: '#F9FAFB',
      text: '#111827',
      border: '#D1D5DB'
    }
  },
  dark: {
    background: {
      default: '#121214'
    },
    customColors: {
      header: '#202024',
      text: '#F9FAFB'
    }
    // deepRed: '#881337',
    // darkPink: '#9F1239',
    // richRed: '#BE123C',
    // crimson: '#E11D48',
    // hotPink: '#F43F5E',
    // lightPink: '#FB7185',
    // palePink: '#FDA4AF',
    // softPink: '#FECDD3',
    // lightBlush: '#FFE4E6',
    // lightGunmetal: '#FFF1F2'
  }
}

export const getTheme = mode => createTheme({ ...baseTheme, palette: { mode, ...palettes[mode] } })
