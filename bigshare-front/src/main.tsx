import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignIn } from './pages/sign-in'

const router = createBrowserRouter([
  {
    path: '/',
    element: <> Hello world! </>,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
