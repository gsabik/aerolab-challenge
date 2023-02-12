import { useEffect, useMemo, useState } from "react";
import { 
	Box,
	Flex,
	Heading, 
	SimpleGrid, 
	Stack, 
	Text,
	VStack
} from "@chakra-ui/react";
import { requestProducts } from "../api/api";
import { FILTERS } from "../utils/utils";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
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
			id="productList"
			mt={{ base: 0, xl: 24}}
			py={12} 
			spacing={12}
		>
			<Heading fontSize={{ base: "32px", xl: "5xl" }} fontWeight="black">
				<Text 
					as="span"
					bgClip="text"
					bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"
					textTransform="uppercase"
				>Tech
				</Text>
				{" "}
				<Text as="span" color="neutral.900" textTransform="uppercase">Products</Text>
			</Heading>
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
				columns={{ base: 1, sm: 2, md: 3, xl: 4 }} 
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