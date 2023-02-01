import { 
	Box,
	Button,
	Divider,
	HStack,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	Text 
} from "@chakra-ui/react";
import { CATEGORIES } from "../utils";

const Filters = ({ FILTERS, filterActive, setFilterActive, categoryActive, setCategoryActive }) => {
	const filters = [
		FILTERS.MostRecent,
		FILTERS.LowestPrice,
		FILTERS.HighestPrice
	];

	return (
		<Stack direction={{ base: "column", xl: "row" }} spacing={6}>
			<HStack spacing={3}>
				<Box display={{ base: "none", xl: "flex" }}>
					<Text noOfLines={1}>Filter by:</Text>
				</Box>
				<Menu>
					<MenuButton
						as={Button}
						border="1px"
						borderColor="#DAE4F2"
						borderRadius="xl"
						color="neutral.600"
						variant="outlined"
					>
						<HStack spacing={12}>
							<Text>{categoryActive || "All Products"}</Text>
							<Box color="black" fontSize="10px">▼</Box>
						</HStack>
					</MenuButton>
					<MenuList>
						{
							CATEGORIES.map(category => (
								<MenuItem
									color="neutral.600" 
									fontWeight="semibold"
									key={category} 
									onClick={(e) => setCategoryActive(e.target.innerText)}
								>{category}
								</MenuItem>
							))
						}
					</MenuList>
				</Menu>
			</HStack>
			<HStack spacing={3}>
				<Divider display={{ base: "none", xl:"flex" }} orientation="vertical"/>
				<Box display={{ base: "none", xl: "flex" }}>
					<Text noOfLines={1}>Sort by:</Text>
				</Box>
				<HStack spacing={6}>
					{
						filters.map(filter => (
							<Button
								bgClip={filter === filterActive ? "" : "text"}
								bgGradient="linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"
								_hover={
									filter === filterActive && {
										bgGradient: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"
									}
								}
								key={filter}
								onClick={() => setFilterActive(filter)}
							>
								<Text
									color={filter === filterActive && "white"}
								>{filter}</Text>
							</Button>
						))
					}
				</HStack>
			</HStack>
		</Stack>
	);
}

export default Filters 