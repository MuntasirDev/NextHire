import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import JobApply from "../JobApply/JobApply";
import Browsejobs from "../Pages/Browsejobs/Browsejobs";


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
                path:"browsejobs", // ✅ এই রুটটিই ব্যবহার করা হবে নেভিগেট করার জন্য
                Component: Browsejobs
            },
            {
                path: '/jobs/:id',
                Component: JobDetails,
                loader: ({params}) => 
                { return fetch(`http://localhost:3000/Jobs/${params.id}`);
            
            }
                
                
            },
            {
                path: "jobApply/:id",
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
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