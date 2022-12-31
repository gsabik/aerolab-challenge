import { 
	Box, 
	Button, 
	Container, 
	Flex, 
	Heading, 
	Image,
	Stack, 
	Text,
	VStack
} from "@chakra-ui/react";
import heroImg from "../assets/illustrations/hero-desktop.png"

const Hero = () => {
	return (
		<Box>
			<Container maxW="6xl">
				<Stack direction="row">
					<VStack w="50%">
						<Text>Explore the</Text>
						<Heading>Tech</Heading>
						<Heading>Zone</Heading>
						<Text>Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.</Text>
						<Button>View all products</Button>
					</VStack>
					<Flex
						alignItems="center" 
						justifyContent="center"
						w="50%"
					>
						<Image
							src={heroImg}
						/>
					</Flex>
				</Stack>
			</Container>
		</Box>
	);
}

export default Hero