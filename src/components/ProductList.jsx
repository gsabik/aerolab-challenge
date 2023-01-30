import { useEffect, useMemo, useState } from "react";
import { 
	Box,
	Flex,
	Heading, 
	SimpleGrid, 
	Stack, 
	VStack
} from "@chakra-ui/react";
import { requestProducts } from "../api/api";
import { FILTERS } from "../utils";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import Pagination from "./Pagination";
import Count from "./Count";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [categoryActive, setCategoryActive] = useState("All Products");
	const [filterActive, setFilterActive] = useState(FILTERS.MostRecent);
	const [currentPage, setCurrentePage] = useState(1);
	const [productsPerPage] = useState(16);

	const getProducts = async() => {
		const data = await requestProducts();
		setProducts(data);
	}

	const filteredProducts = useMemo(() => {
		const productsByCaterory = products.filter((product) => 
		categoryActive === "All Products" ? products : categoryActive === product.category
		);
		
		switch(filterActive) {
			case FILTERS.HighestPrice: {
				return productsByCaterory.sort((a, b) => b.cost - a.cost);
			}
			
			case FILTERS.LowestPrice: {
				return productsByCaterory.sort((a, b) => a.cost - b.cost);
			}
			
			case FILTERS.MostRecent: default: return productsByCaterory;
		}
	}, [products, filterActive, categoryActive]);
	
	// Get current product
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

	const paginate = (pageNumber) => setCurrentePage(pageNumber); 

	useEffect(() => {
		getProducts();
	}, []);
	
	return (
		<VStack 
			alignItems="flex-start" 
			py={12} 
			spacing={12}
		>
			<Heading color="neutral.900" fontWeight="black">TECH PRODUCTS</Heading>
			<Flex justifyContent="space-between" w="full">
				<Filters 
					FILTERS={FILTERS} 
					filterActive={filterActive} 
					setFilterActive={setFilterActive}
					categoryActive={categoryActive}
					setCategoryActive={setCategoryActive}
				/>
				<Box display={{ base: "none", md: "flex" }}>
					<Pagination
						currentPage={currentPage} 
						productsPerPage={productsPerPage} 
						totalProducts={products.length}
						paginate={paginate}
					/>
				</Box>
			</Flex>
			<SimpleGrid 
				columns={[1, 2, 3, 4]} 
				gap={6} 
				w="full"
			>
				{
					currentProducts.map(product => (<ProductCard key={product._id} product={product}/>))
				}
			</SimpleGrid>
			<Flex 
				alignItems="center" 
				direction="row" 
				justifyContent="flex-end"
				w="full"
			>
				<Stack 
					alignItems="center" 
					direction={{ base: "column-reverse", xl: "row" }}
					justifyContent="space-between" 
					spacing={6}
					w={{ base: "full", xl: "55%" }}
				>
					<Count 
						current={currentProducts.length} 
						currentPage={currentPage}
						total={products.length}
					/>
					<Pagination
						currentPage={currentPage} 
						productsPerPage={productsPerPage} 
						paginate={paginate}
						totalProducts={products.length}
					/>
				</Stack>
			</Flex>
		</VStack>
	);
}

export default ProductList