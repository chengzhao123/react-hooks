import Home from '../pages/home/index'
import HomeDetail from '../pages/homeDetail/index'

const router =  [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/detail',
    component: HomeDetail,
    exact: true
  },
]
export default router

