import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Jobs from './pages/Jobs.jsx';
import Blog from './pages/Blog.jsx';
import NotFound from './pages/NotFound.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element:<About/> ,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "*",
         element: <NotFound/> 
      },
      {
        path:"/contact",
        element:<Contact/>  
      },
      {
        path:"/jobs",
        element:<Jobs/>
      },
      {
        path:"/blog",
        element:<Blog/>
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
