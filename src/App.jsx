import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// pages
import { ErrorPage } from './pages/error.jsx'
import Home from './pages/home.jsx'
import TreasureHunt from './pages/treasure-hunt.jsx'
import SalstarsBot from './pages/salstars-bot.jsx'

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
        { path: 'salstars-bot', element: <SalstarsBot /> },
        { path: '/', element: <Home /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
