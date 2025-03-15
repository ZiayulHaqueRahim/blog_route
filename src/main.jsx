import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,  Route, RouterProvider } from 'react-router-dom'


import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'


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
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        loader: githubInfoLoader,
        path: 'github',
        element: <Github />,
      },
      {
        path: 'user/:id',
        element: <User />
      }
    ]
    }
]);


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={Layout}>
//       <Route  path='' element={ <Home/>} />
//       <Route  path='' element={ <Home/>} />
//       <Route  path='' element={ <Home/>} />
//       <Route  path='' element={ <Home/>} />
//       <Route  path='' element={ <Home/>} />



//     </Route>
//   )
// )







createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
