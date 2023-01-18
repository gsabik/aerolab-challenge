import { 
	Box,
	Button,
	Flex,
	HStack, 
	Image,
	Text
} from "@chakra-ui/react";
import chevron from "../assets/icons/chevron-active.svg";

const Pagination = ({ currentPage, productsPerPage, totalProducts, paginate }) => {
	const pageNumbers = [];
	 
	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<Box
			border="1px"
			borderColor="#DAE4F2" 
			borderRadius="xl" 
			p={3}
		>
			<Flex direction="row" w="full">
				<Button 
					onClick={() => paginate(pageNumbers[0])}
					h="20px"
					size="xs"	
					transform="rotate(180deg)"
				>
					<Image alt={chevron} src={chevron}/>
				</Button>
				<Text noOfLines={1}>Page {currentPage} of 2</Text>
				<Button 
					onClick={() => paginate(pageNumbers[1])}
					size="xs"
				>
					<Image alt={chevron} src={chevron}/>
				</Button>
			</Flex>
		</Box>
	)
}

export default Pagination