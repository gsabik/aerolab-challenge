import { 
	Button,
	Divider,
	HStack,
	Select,
	Text 
} from "@chakra-ui/react";
import { CATEGORIES } from "../utils";

const Filters = ({ FILTERS, filterActive, setFilterActive, setCategoryActive }) => {

	const filters = [
		FILTERS.MostRecent,
		FILTERS.LowestPrice,
		FILTERS.HighestPrice
	];

	return (
		<HStack spacing={6} w="fit-content">
			<HStack spacing={3}>
				<Text noOfLines={1}>Filter by:</Text>
				<Select w="fit-content"
					onChange={(e) => setCategoryActive(e.target.value)}
				>
					<option value="" defaultChecked>All Products</option>
					{
						CATEGORIES.map(category => (
							<option
								key={category}
							>{category}
							</option>
						))
					}
				</Select>
			</HStack>
			<HStack spacing={3}>
				<Divider orientation="vertical"/>
				<Text noOfLines={1}>Sort by:</Text>
				<HStack spacing={6}>
					{
						filters.map(filter => (
							<Button
								bgGradient={filter === filterActive && "linear(to-r, #176FEB, #FF80FF)"}
								color={filter === filterActive && "white"} 
								key={filter}
								onClick={() => setFilterActive(filter)}
							>{filter}
							</Button>
						))
					}
				</HStack>
			</HStack>
		</HStack>
	);
}

export default Filters