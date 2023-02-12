import { Container, Flex } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Walkthrough from "../components/Walkthrough";

const Home = () => {
	return (
		<Flex direction="column" scrollBehavior="smooth" overflowY="auto">
			<Hero/>
			<Walkthrough/>
			<Container maxWidth="8xl">
				<ProductList/>
				<Footer/>
			</Container>
		</Flex>
	);
}

export default Home