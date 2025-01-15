import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from 'layouts/mainLayout/mainLayout'
import { MainPage } from 'pages/mainPage/mainPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: '/',
    children: [
      { path: '/', element: <MainPage /> }
    ]
  },
  { basename: '/playlist' }
])
