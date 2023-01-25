import { 
	Button,
	Flex, 
	Heading, 
	Image,
	Stack,
	Text, 
	VStack
} from "@chakra-ui/react";
import heroImg from "../assets/illustrations/hero-desktop.png";
import arrowDown from "../assets/icons/Icons.svg";

const Hero = () => {
	return (
		<Stack
			direction={{ base: "column", lg: "row" }}
			pb={24}
		>
			<Flex 
				alignSelf={{base: "center", lg: "flex-end"}} 
				direction="column" 
			>
    			<VStack 
					alignItems={{base: "center", lg: "flex-start"}}
					pb={12}
				>
				<Text 
					color="neutral.600" 
					fontWeight="semibold" 
					textTransform="uppercase"
				>Explore the
				</Text>
					<Heading 
						fontSize="200px" 
						fontWeight="extrabold" 
						lineHeight="80%"
						pb={6}
					>
						<Text 
							as="span" 
							bgClip="text" 
							bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"
						>TECH
						</Text>
						<br/>
						<Text as="span" color="neutral.900">ZONE</Text>
					</Heading>
					<Text color="neutral.600" fontWeight="semibold">Here you’ll be able to exchange all of your hard-earned <br/> Aeropoints and exchange them for cool tech.</Text>
    			</VStack>
				<Flex justifyContent={{base: "center", lg:"flex-start"}} w="full">
					<Button
						alignItems="center" 
						borderRadius="2xl"
						bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)" 
						color="white" 
						h="75px"
						_hover={{
							bgGradient: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"
						}}
						px={12}
						textTransform="uppercase"
						w="fit-content"
					>
						<a href="#">View all products</a>
						<Image alt={arrowDown} src={arrowDown}/>
					</Button>
				</Flex>
			</Flex>
			<Image 
				alt={heroImg} 
				src={heroImg}
				w="750px"
			/>
		</Stack>
	);
}

export default Hero