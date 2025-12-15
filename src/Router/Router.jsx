import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/jobs/:id',
            Component: JobDetails,
            loader: ({params}) => 
            { return fetch(`http://localhost:3000/Jobs/${params.id}`);
          
          }
              
           
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/signin',
          Component: SignIn
        }
    ]
  },
]);

export default router;