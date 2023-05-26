import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout'


//pages
import Dashboard, { tasksLoader } from './pages/Dashboard'
import Profile from './pages/Profile'
import Create from './pages/Create'

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
           <Route index loader={tasksLoader} element={<Dashboard/>} />
           <Route path='profile' element={<Profile/>} />
           <Route path='create' element={<Create/>}/>
        </Route>
    )
)


const App=()=>{

    return(
        <>
      <RouterProvider router={router} />
        </>
    )
}
export default App