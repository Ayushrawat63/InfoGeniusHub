import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UploadImage from './Components/UploadImage'
import About from './Components/About'
import Error from './Components/Error'
import App from "./App"
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
// import appRouter from './App.jsx'


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/uploadImage",
        element:<UploadImage/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ],
    errorElement:<Error/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
