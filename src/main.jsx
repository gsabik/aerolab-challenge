import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { UserProvider } from "./context/UserContext";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ChakraProvider theme={theme}>
		<UserProvider>
			<RouterProvider router={router}/>
		</UserProvider>
	</ChakraProvider>
);