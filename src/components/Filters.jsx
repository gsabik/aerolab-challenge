import { 
	Button,
	HStack, 
	Select,
	Text 
} from "@chakra-ui/react"

const Filters = ({ FILTERS, filterActive, setFilterActive }) => {
	const filters = [
		FILTERS.MostRecent,
		FILTERS.LowestPrice,
		FILTERS.HighestPrice
	];

	return (
		<HStack spacing={6}>
			<Text>Filter by:</Text>
			<Select>
				<option>Hola</option>
				<option>Hola</option>
				<option>Hola</option>
				<option>Hola</option>
				<option>Hola</option>
				<option>Hola</option>
			</Select>
			<Text>Sort by:</Text>
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
	);
}

export default Filters