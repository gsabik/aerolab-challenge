import {
	Button,
	Flex, 
	Heading, 
	Image,
	Text, 
	VStack
} from "@chakra-ui/react";
import heroImg from "../assets/illustrations/hero-desktop.png";
import arrowDown from "../assets/icons/Icons.svg";

const Hero = () => {
	return (
		<Flex
			alignItems={{ base: "center", xl:"flex-end" }}
			direction={{ base: "column", xl: "row" }}
			pb={24}
			pt={{ base: 24, xl: 0}}
		>
			<Flex direction="column">
				<VStack 
					alignItems={{ base: "center", xl: "flex-start"}}
					direction="column"
					spacing={6}
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
				<Flex justifyContent={{ base: "center", xl: "flex-start" }} w="full">
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
			<Flex 
				position="relative"
				justifyContent="center" 
				w="full" 
			>
				<Image 
					h="750px" 
					src={heroImg} 
					zIndex={1}
				/>
				<Flex
					bgGradient="linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)"
					bottom={0}
					borderRadius="20%"
					position="absolute"
					h="600px"
					w="700px"
				/>
			</Flex>
		</Flex>
	);
}

export default Hero