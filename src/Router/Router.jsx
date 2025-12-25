import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import JobApply from "../JobApply/JobApply";
import Browsejobs from "../Pages/Browsejobs/Browsejobs";
import MyApllications from "../Pages/MyApllications/MyApllications"; 
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MYPostedJobs/MYPostedJobs";
import AboutUs from "../Pages/About Us/AboutUs";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "browsejobs",
        element: <Browsejobs />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <MyApllications />
          </PrivateRoute>
        ),
      },
      {
        path: "jobs/:id",
        element: <JobDetails />,
        // ফিক্সড: credentials যোগ করা হয়েছে
        loader: async ({ params }) => {
          const res = await fetch(`https://next-hire-server-steel.vercel.app/jobs/${params.id}`, {
            credentials: "include"
          });
          return res.json();
        }
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "Postedjob",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "applications/:id",
        element: (
          <PrivateRoute>
            <MyApllications />
          </PrivateRoute>
        ),
        
        loader: ({ params }) =>
          fetch(`https://next-hire-server-steel.vercel.app/applications/job/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;