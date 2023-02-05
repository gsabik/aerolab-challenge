import {
	Button,
	Container,
	Flex, 
	Heading, 
	Image,
	Text, 
	VStack
} from "@chakra-ui/react";
import heroImg from "../assets/illustrations/hero-desktop.png";
import arrowDown from "../assets/icons/Icons.svg";
import wavesPattern from "../assets/illustrations/single-wave-pattern.svg";

const Hero = () => {
	return (
		<Flex 
			bgImage={wavesPattern} 
			my={12}
			py={9}
		>
			<Container maxWidth="8xl">
				<Flex direction={{ base: "column", xl: "row" }}>
					<VStack direction="column" spacing={{ base: 6, xl: 9 }}>
						<VStack 
							alignItems={{ base: "center", xl: "flex-start" }}
							direction="column"
							maxW={{ base: "290px", xl: "none" }}
							pb={12}
							textAlign={{ base: "center", xl: "start" }}
						>
							<Text 
								color="neutral.600" 
								fontSize={{ base: "md", xl: "xl" }}
								fontWeight="semibold" 
								textTransform="uppercase"
							>Explore the
							</Text>
							<Heading 
								fontSize={{base: "8xl", xl: "200px" }}
								fontWeight="extrabold" 
								lineHeight="80%"
								pb={6}
								textTransform="uppercase"
							>
								<Text 
									as="span" 
									bgClip="text" 
									bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"
								>Tech
								</Text>
								{" "}
								<Text as="span" color="neutral.900">Zone</Text>
							</Heading>
							<Text 
								color="neutral.600" 
								fontSize={{ base: "md", xl: "xl" }} 
								fontWeight="semibold"
							>Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.
							</Text>
						</VStack>
						<Flex bottom={0} justifyContent={{ base: "center", xl: "flex-start" }} w="full">
							<Button
								alignItems="center" 
								borderRadius="2xl"
								bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)" 
								color="white" 
								fontSize="xl"
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
					</VStack>
					<Flex justifyContent="center" w="full" position="relative">
						<Image 
							h={{ base: "600px", xl: "750px" }} 
							src={heroImg} 
							zIndex={1}
							mt={{ base: "none", xl: "-150px" }}
						/>
						<Flex
							bgGradient="linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)"
							borderRadius="25%"
							display={{ base: "none", xl: "flex" }}
							h="600px"
							w="750px"
							position="absolute"
							bottom={0}
						/>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	);
}

export default Hero