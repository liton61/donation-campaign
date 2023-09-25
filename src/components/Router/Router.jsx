import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statics from "../Statics/Statics";
import ErrorPage from "../ErrorPage/ErrorPage";
import SelectCategory from "../SelectCategory/SelectCategory";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
            },
            {
                path: "/statics",
                element: <Statics></Statics>,
            },
            {
                path: "/cards/:id",
                element: <SelectCategory></SelectCategory>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default router;