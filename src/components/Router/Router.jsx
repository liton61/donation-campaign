import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statics from "../Statics/Statics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
        ]
    }
])

export default router;