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
        loader: ({ params }) =>
          fetch(`http://localhost:3000/Jobs/${params.id}`),
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
          fetch(`http://localhost:3000/applications/job/${params.id}`),
      },
      {
        path: "aboutus",
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        ),
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
