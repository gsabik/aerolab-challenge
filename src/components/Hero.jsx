import { 
	Box, 
	Button, 
	Container, 
	Flex, 
	Heading, 
	Image,
	Stack, 
	Text,
} from "@chakra-ui/react";
import heroImg from "../assets/illustrations/hero-desktop.png"

const Hero = () => {
	return (
		<Box>
			<Container maxW="6xl">
				<Stack direction="row">
					<Flex
						direction="column"
						p={0} 
						h="100%" 
						w="50%"
					>
						<Text color="neutral.600" fontWeight="medium">EXPLORE THE</Text>
						<Heading 
							bgClip="text" 
							bgGradient="linear(to-r, #176FEB, #FF80FF)" 
							fontSize="9xl"
							fontWeight="black"
							lineHeight="none"
						>TECH
						</Heading>
						<Heading 
							color="neutral.900" 
							fontSize="9xl"
							fontWeight="black"
							lineHeight="none"
						>ZONE
						</Heading>
						<Text color="neutral.600">Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.</Text>
						<Button>View all products</Button>
					</Flex>
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