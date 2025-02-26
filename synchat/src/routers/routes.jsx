import { createBrowserRouter, createBrowserRouter as createRouter } from "react-router-dom";

//coomponents
import App from "../App.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";

//actions
import registerAction from "./actions/registerActions.js";
import loginAction from "./actions/loginAction.js";

//loaders
import registerLoader from "./loaders/registerLoader.js";
import loginLoader from "./loaders/loginLoader.js";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,

    },
    {
        path: '/register',
        element: <Register />,
        action: registerAction,
        loader: registerLoader,
    },
    {
        path: '/login',
        element: <Login />,
        action: loginAction,
        loader: loginLoader,
    },
]);

export default router;