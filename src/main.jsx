import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import HomePage from './application/pages/homepage/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
      <Route index element={<HomePage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
