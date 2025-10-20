import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// pages
import { ErrorPage } from './pages/error.jsx'
const Home = lazy(() => import('./pages/home.jsx'))
const TreasureHunt = lazy(() => import('./pages/treasure-hunt.jsx'))

// components
import { Footer } from './components/footer.jsx'
import { Loader } from './components/loader.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <section>
        <div className='main'>
          <Suspense fallback={<div className='screen-center'>
            <Loader />
          </div> }>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </section>,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: '/', element: <Home /> },
        { path: 'treasure-hunt', element: <TreasureHunt /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
