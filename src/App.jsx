import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// pages
import { ErrorPage } from './pages/error.jsx'
import Home from './pages/home.jsx'
import TreasureHunt from './pages/treasure-hunt.jsx'

// components
import { Footer } from './components/footer.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <section>
        <div className='main'>
            <Outlet />
        </div>
        <Footer />
      </section>,
      errorElement: <ErrorPage />,
      children: [
        { path: 'treasure-hunt', element: <TreasureHunt /> },
        { path: '/', element: <Home /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
