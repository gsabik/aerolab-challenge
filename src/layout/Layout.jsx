import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Layout = () => {
	return (
		<Flex direction="column">
			<Navbar/>
			<Hero/>
		</Flex>
	);
}

export default Layout