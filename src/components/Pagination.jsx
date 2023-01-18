import { 
	Box,
	Button,
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
			<HStack spacing={3} w="full">
				<Button 
					disabled={currentPage === 1}
					h="20px"
					onClick={() => paginate(pageNumbers[0])}
					size="xs"	
					transform="rotate(180deg)"
				>
					<Image alt={chevron} src={chevron}/>
				</Button>
				<Text noOfLines={1}>Page {currentPage} of 2</Text>
				<Button
					disabled={currentPage === 2} 
					onClick={() => paginate(pageNumbers[1])}
					size="xs"
				>
					<Image alt={chevron} src={chevron}/>
				</Button>
			</HStack>
		</Box>
	);
}

export default Pagination