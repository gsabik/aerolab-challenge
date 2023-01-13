import { 
	useEffect, 
	useMemo, 
	useState 
} from "react";
import { 
	Heading, 
	SimpleGrid, 
	VStack
} from "@chakra-ui/react";
import { requestProducts } from "../api/api";
import { FILTERS } from "../utils";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [categoryActive, setCategoryActive] = useState("");
	const [filterActive, setFilterActive] = useState(FILTERS.MostRecent);

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
			<Filters 
				FILTERS={FILTERS} 
				filterActive={filterActive} 
				setFilterActive={setFilterActive}
				setCategoryActive={setCategoryActive}
			/>
			<SimpleGrid 
				columns={4} 
				gap={6} 
				w="full"
			>
				{
					filteredProducts.map(product => (<ProductCard key={product._id} product={product}/>))
				}
			</SimpleGrid>
		</VStack>
	);
}

export default ProductList