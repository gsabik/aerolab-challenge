import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<Flex direction="column">
			<Navbar/>
			<Box>
				<Outlet/>
			</Box>
		</Flex>
	);
}

export default Layout