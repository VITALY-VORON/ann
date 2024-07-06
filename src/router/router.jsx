import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import Prew from "../pages/prew";
import Scoup from "../pages/scoup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "", element: <Scoup /> }
        ]
    }
])