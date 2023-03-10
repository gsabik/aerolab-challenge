import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { 
	Flex, 
	HStack, 
	Image,
	Text 
} from "@chakra-ui/react";
import { formattedDate } from "../utils/utils";
import aeropayTwo from "../assets/icons/aeropay-2.svg";

const Aerocard = () => {
	const { user } = useContext(UserContext);

	return (
		<Flex
			bgColor="neutral.900"
			borderRadius="xl"
			color="white"
			direction="column"
			fontWeight="semibold"
			h="180px"
			justifyContent="space-between"
			p={6}
			w="full"
		>
			<HStack justifyContent="space-between" w="full">
				<Text>Aerocard</Text>
				<Image alt={aeropayTwo} src={aeropayTwo}/>
			</HStack>
			<HStack justifyContent="space-between" w="full"> 
				<Text fontSize="sm">{user.name}</Text>
				<Text fontSize="sm">{formattedDate(user.createDate)}</Text>
			</HStack>
		</Flex>
	);
}

export default Aerocard