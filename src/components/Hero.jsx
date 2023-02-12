import {
	Box,
	Button,
	Container,
	Flex, 
	Heading, 
	Image,
	Text, 
	VStack
} from "@chakra-ui/react";
import heroDesktop from "../assets/illustrations/hero-desktop.png";
import heroResponsive from "../assets/illustrations/hero-responsive.png";
import arrowDown from "../assets/icons/Icons.svg";
import wavesPattern from "../assets/illustrations/single-wave-pattern.svg";

const Hero = () => {
	return (
		<Flex 
			bgImage={wavesPattern} 
			my={{ base: 0, xl: 24 }}
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
								fontSize={{ base: "8xl", xl: "200px" }}
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
								fontSize={{ base: "md", xl: "lg" }} 
								fontWeight="semibold"
							>Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.
							</Text>
						</VStack>
						<Flex justifyContent={{ base: "center", xl: "flex-start" }} w="full">
							<Flex
								alignItems="center" 
								borderRadius="3xl"
								bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)" 
								color="white"
								fontSize={{ base: "md", xl: "xl" }}
								fontWeight="semibold"
								h="75px"
								_hover={{
									bgGradient: "linear(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"
								}}
								px={{ base: 9, xl: 12 }}
								textTransform="uppercase"
								w="fit-content"
							>
								<a href="#productList">View all products</a>
								<Image alt={arrowDown} src={arrowDown}/>
							</Flex>
						</Flex>
					</VStack>
					<Flex justifyContent="center" w="full">
						<Box display={{ base: "none", xl: "flex"}} zIndex={10}>
							<Image 
								alt={heroDesktop}
								h="750px"
								src={heroDesktop} 
								mt="-150px"
							/>
						</Box>
						<Box display={{ base: "flex", xl: "none"}} zIndex={10}>
							<Image 
								alt={heroResponsive}
								h="520px"
								src={heroResponsive} 
								mt="-300px"
								transform="translateY(325px)"
							/>
						</Box>
						<Flex
							bgGradient="linear(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)"
							borderRadius="25%"
							display={{ base: "none", xl: "flex" }}
							h="600px"
							w="722px"
							position="absolute"
						/>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	);
}

export default Hero