import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'


// const router = createBrowserRouter([

    
//   //   ]
    
//   // }

//   {
//     path: '/',
//     Component: <About/>
//   }
// ])


const router = createBrowserRouter([
    {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
    }
]);








createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
