import { Container, Flex } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<Flex direction="column">
			<Hero/>
			<Container maxWidth="8xl">
				<ProductList/>
				<Footer/>
			</Container>
		</Flex>
	);
}

export default Home