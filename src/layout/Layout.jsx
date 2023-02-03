import { Outlet } from "react-router-dom";
import { Box, Container, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<Flex direction="column">
			<Navbar/>
			<Box>
				<Container maxWidth="8xl">
					<Outlet/>
				</Container>
			</Box>
		</Flex>
	);
}

export default Layout