import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MainLayout from "./Layout/MainLayout";
import ShowDetailsScreen from "./screens/ShowDetailsScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeScreen></HomeScreen>,
      },
      {
        path: "/show/:id",
        element: <ShowDetailsScreen></ShowDetailsScreen>,
      },
    ],
  },
]);

export default router;
