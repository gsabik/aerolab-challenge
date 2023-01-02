import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Layout = () => {

	return (
		<Flex direction="column">
			<Navbar/>
			<Outlet/>
		</Flex>
	);
}

export default Layout