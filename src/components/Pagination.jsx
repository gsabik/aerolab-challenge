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
				<Text 
					color="neutral.600" 
					fontWeight="semibold" 
					noOfLines={1}
				>Page  
					<Text 
						as="span" 
						bgClip="text" 
						bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"
					> {currentPage} of 2
					</Text>
				</Text>
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