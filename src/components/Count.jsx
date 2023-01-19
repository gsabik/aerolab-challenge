import { Text } from "@chakra-ui/react";

const Count = ({ current, total, currentPage }) => {
	
	return (
		<Text>
			<Text as="span">{currentPage === 2 ? current + 16 : current} of {total}</Text> products
		</Text>
	);
}

export default Count