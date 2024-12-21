import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Root from "./layout/Root.jsx";
import AppliedJobs from "./pages/appliedJobs/AppliedJobs.jsx";
import Statistics from "./pages/statistics/Statistics.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import ErrorPage from "./pages/error/ErrorPage.jsx";
import JobDetails from "./pages/jobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "applied-jobs", element: <AppliedJobs /> },
      { path: "statistics", element: <Statistics /> },
      { path: "blogs", element: <Blogs /> },
      {
        path: "job-details/:jobId",
        element: <JobDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
