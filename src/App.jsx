// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './user/Home'
import './index.css'
import userRouter from './routes/userRoutes'
import organizerRouter from './routes/organizerRoutes'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { compileAst } from 'tailwindcss'

function App() 
  // const [count, setCount] = useState(0)
{
  const router=createBrowserRouter([
    ...userRouter,
    ...organizerRouter
  ]);
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
