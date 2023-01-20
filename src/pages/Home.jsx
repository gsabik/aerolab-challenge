import { Flex } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<Flex direction="column">
			<Hero/>
			<ProductList/>
			<Footer/>
		</Flex>
	);
}

export default Home