import { useEffect, useMemo, useState } from "react";
import { 
	Flex,
	Heading, 
	SimpleGrid, 
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
	const [categoryActive, setCategoryActive] = useState("");
	const [filterActive, setFilterActive] = useState(FILTERS.MostRecent);
	const [currentPage, setCurrentePage] = useState(1);
	const [productsPerPage] = useState(16);

	const getProducts = async() => {
		const data = await requestProducts();
		setProducts(data);
	}

	const filteredProducts = useMemo(() => {
		const productsByCaterory = products.filter((product) => 
		categoryActive ? product.category === categoryActive : products
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
					setCategoryActive={setCategoryActive}
				/>
				<Pagination
					currentPage={currentPage} 
					productsPerPage={productsPerPage} 
					totalProducts={products.length}
					paginate={paginate}
				/>
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
				<Flex alignItems="center" direction="row" justifyContent="space-between" w="55%">
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
				</Flex>
			</Flex>
		</VStack>
	);
}

export default ProductList