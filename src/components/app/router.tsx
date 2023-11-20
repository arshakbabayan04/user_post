import { useRoutes } from "react-router"
import Header from "../header/Header"
import Home from "../home/Home"
import Posts from "../Posts/Posts"
import { Search } from "../search/Search"
import Users from "../users/Users"

export const Router = () => {
    return useRoutes([
        {
            path: '',
            element: <Header />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "users",
                    element: <Users />
                },

                {
                    path: "posts/:id",
                    element: <Posts />
                },
                {
                    path: "search/:text",
                    element: <Search />
                },
            ]
        }
    ])
}