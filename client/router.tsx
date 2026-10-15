import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import NotFound from './components/NotFound'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
