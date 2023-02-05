import { 
	Flex,
	HStack, 
	Image, 
	Text
} from "@chakra-ui/react";
import githubDefault from "../assets/icons/github-default.svg";

const Footer = () => {
	return (
		<Flex 
			alignItems="center" 
			h="200px"
			fontSize="xl" 
			justifyContent="center" 
			w="full"
		>
			<a href="https://github.com/gsabik/aerolab-challenge" target="_blank">
				<HStack>
					<Image alt={githubDefault} src={githubDefault}/>
					<Text color="neutral.600" fontWeight="semibold">View this repository</Text>
				</HStack>
			</a>
		</Flex>
	);
}

export default Footer