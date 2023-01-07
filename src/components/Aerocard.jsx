import { 
	Flex, 
	HStack, 
	Image,
	Text 
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import aeropayTwo from "../assets/icons/aeropay-2.svg";

const Aerocard = () => {
	const { user } = useContext(UserContext);
	return (
		<Flex
			bgColor="neutral.900"
			borderRadius="xl"
			color="white"
			direction="column"
			h="200px"
			justifyContent="space-between"
			p={4}
		>
			<HStack justifyContent="space-between" w="full">
				<Text>Aerocard</Text>
				<Image src={aeropayTwo}/>
			</HStack>
			<HStack justifyContent="space-between" w="full"> 
				<Text>{user.name}</Text>
				<Text>{user.createDate}</Text>
			</HStack>
		</Flex>
	);
}

export default Aerocard