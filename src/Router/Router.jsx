import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Home from "../Home/Home";
import ProjectsDetails from "../Pages/ProjectsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/projects/:id",
        element: <ProjectsDetails></ProjectsDetails>
      }
      
    ],
  },
]);