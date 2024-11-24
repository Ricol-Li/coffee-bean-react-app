import { createBrowserRouter } from 'react-router-dom'
import { RedirectToHome } from '../components/common/RedirectToHome'
import Main from '../pages/main'
import Home from '../pages/home'
import Mall from '../pages/mall'
import User from '../pages/user'
import PageOne from '../pages/other/pageOne'
import PageTwo from '../pages/other/pageTwo'

const routes = [
  {
    path: '/react',
    Component: Main,
    children: [
      {
        path: '/react',
        Component: RedirectToHome,
      },
      {
        path: 'home',
        Component: Home,
      },
      {
        path: 'mall',
        Component: Mall,
      },
      {
        path: 'user',
        Component: User,
      },
      {
        path: 'other',
        children: [
          {
            path: 'pageOne',
            Component: PageOne,
          },
          {
            path: 'pageTwo',
            Component: PageTwo,
          },
        ],
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
