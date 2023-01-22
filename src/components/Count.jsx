import { HStack, Text } from "@chakra-ui/react";

const Count = ({ current, total, currentPage }) => {
	
	return (
		<HStack color="neutral.600" fontWeight="semibold">
			<Text 
				as="span"
				bgClip="text"
				bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"
			>{currentPage === 2 ? current * 2 : current} of {total}
			</Text>
			<Text>products</Text>
		</HStack>
	);
}

export default Count