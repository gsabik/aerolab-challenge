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
		<Stack 
			color="neutral.600" 
			direction={{ base: "column", xl: "row" }} 
			fontSize="lg"
			spacing={6}
		>
			<HStack spacing={3}>
				<Box display={{ base: "none", xl: "flex" }}>
					<Text fontWeight="semibold">Filter by:</Text>
				</Box>
				<Menu>
					<MenuButton
						as={Button}
						border="1px"
						borderColor="#DAE4F2"
						borderRadius="xl"
						color="neutral.600"
						py={4}
						variant="outlined"
					>
						<HStack spacing={12}>
							<Text pr={6}>{categoryActive || "All Products"}</Text>
							<Box color="black" fontSize="10px">▼</Box>
						</HStack>
					</MenuButton>
					<MenuList>
						{
							CATEGORIES.map(category => (
								<MenuItem
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
					<Text fontWeight="semibold">Sort by:</Text>
				</Box>
				<Stack direction={{ base: "column", sm: "row" }} spacing={6}>
					{
						filters.map(filter => (
							<Box
								cursor="pointer"
								bgClip="text"
								bg={`#E5F0FF ${filter === filterActive ? "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)" : ""}`}
								borderRadius="xl"
								_hover={
									filter === filterActive && {
										bgGradient: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"
									}
								}
								key={filter}
								onClick={() => setFilterActive(filter)}
								py={2}
								px={{ base: 4, xl: 6 }}
							>
								<Text
									bgClip="text"
									bgGradient={filter === filterActive ? "" : "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"}
									color={filter === filterActive && "white"}
									fontWeight="semibold"
								>{filter}</Text>
							</Box>
						))
					}
				</Stack>
			</HStack>
		</Stack>
	);
}

export default Filters 