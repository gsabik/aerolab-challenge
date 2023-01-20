import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { 
	Flex, 
	HStack, 
	Image,
	Text 
} from "@chakra-ui/react";
import aeropayTwo from "../assets/icons/aeropay-2.svg";

const Aerocard = () => {
	const { user } = useContext(UserContext);

	// Formatted user date
	const date = new Date(user.createDate);
	const options = { month: "2-digit", day: "2-digit"};
	const formattedDate = date.toLocaleDateString("en-US", options);

	return (
		<Flex
			bgColor="neutral.900"
			borderRadius="xl"
			color="white"
			direction="column"
			fontWeight="semibold"
			h="180px"
			justifyContent="space-between"
			p={4}
			w="full"
		>
			<HStack justifyContent="space-between" w="full">
				<Text>Aerocard</Text>
				<Image alt={aeropayTwo} src={aeropayTwo}/>
			</HStack>
			<HStack justifyContent="space-between" w="full"> 
				<Text>{user.name}</Text>
				<Text>{formattedDate}</Text>
			</HStack>
		</Flex>
	);
}

export default Aerocard