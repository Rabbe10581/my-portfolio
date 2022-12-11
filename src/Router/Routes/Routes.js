import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import Skills from "../../pages/Skills/Skills";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('skills.json'),
                element: <Home></Home>
            },
            {
                path: '/projects',
                loader: () => fetch('projects.json'),
                element: <Projects></Projects>
            },
        ]
    }
])
export default router;