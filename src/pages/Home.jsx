import { Flex } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

const Home = () => {
	return (
		<Flex direction="column">
			<Hero/>
			<ProductList/>
		</Flex>
	);
}

export default Home