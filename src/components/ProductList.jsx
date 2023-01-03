import { useEffect, useState } from "react";
import { 
	Box, 
	Heading, 
	SimpleGrid 
} from "@chakra-ui/react";
import { requestProducts } from "../api/api";
import ProductCard from "./ProductCard";


const ProductList = () => {
	const [products, setProducts] = useState([]);

	const getProducts = async() => {
		const data = await requestProducts();
		setProducts(data);
	}

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Box py={12}>
			<Heading color="neutral.900" fontWeight="black" pb={6}>TECH PRODUCTS</Heading>
			<SimpleGrid columns={4} gap={6} w="full">
				{
					products.map(product => (<ProductCard key={product._id} {...product}/>))
				}
			</SimpleGrid>
		</Box>
	);
}

export default ProductList