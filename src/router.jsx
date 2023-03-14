import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Header from "./Header";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Header />,

            children: [
                {
                    index: true,
                    element: <App />,
                    loader: ()=>redirect('/Explore'),
                },
                {
                    path: "/Explore",
                    element: <App />,
                }
            ]
        }
    ],
    {
    basename: '/gree-commerce'
    }
  )
  
  export default router;
  