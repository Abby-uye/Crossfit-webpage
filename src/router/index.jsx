import Home from "../features/home";
import Layout from "../layout";

export const Routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            }


        ]
    }
]