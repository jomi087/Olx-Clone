import DetailPage from "./pages/DetailPage"
import LandingPage from "./pages/LandingPage"
import { createBrowserRouter,RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path : '/',
    element : <LandingPage/>
  },
  {
    path : '/details',
    element : <DetailPage/>
  }
])


const App = () => {
  return (
    <>
        <RouterProvider router ={router}/>
    </>
  )
}

export default App