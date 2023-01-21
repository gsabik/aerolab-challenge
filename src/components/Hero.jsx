import { 
	Button, 
	Flex, 
	Heading, 
	HStack, 
	Image,
	Text,
} from "@chakra-ui/react";
import heroImg from "../assets/illustrations/hero-desktop.png";

const Hero = () => {
	return (
		<HStack>
			<Flex
				direction="column"
				alignSelf="flex-end"
				p={0} 
				h="100%" 
				w="50%"
			>
				<Text color="neutral.600" fontWeight="medium">EXPLORE THE</Text>
				<Heading
					bgClip="text" 
					bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)" 
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
					pb={6}
				>ZONE
				</Heading>
				<Text 
					color="neutral.600"
					fontWeight="semibold" 
					pb={12}
				>Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.
				</Text>
				<Button
					bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"
					borderRadius="2xl"
					color="white"
					h={14}
					px={6}
					w="fit-content"
				>VIEW ALL PRODUCTS
				</Button>
			</Flex>
			<Flex
				alignItems="center" 
				justifyContent="center"
				w="50%"
			>
				<Image alt={heroImg} src={heroImg}/>
			</Flex>
		</HStack>
	);
}

export default Hero