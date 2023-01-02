import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import RedeemHistory from "../pages/RedeemHistory";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
			{
				index: true,
				element: <Home/>
			},
			{
				path: "/history",
				element: <RedeemHistory/>
			}
		]
	}
]);