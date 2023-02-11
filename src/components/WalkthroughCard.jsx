import { 
	Box,
	Flex,
	HStack,
	Image,
	Text,
	VStack 
} from "@chakra-ui/react";

const WalkthroughCard = ({ title, description, icon, imageDesktop, imageResponsive, styles }) => {
	return (
		<VStack 
			bgColor={{ base: "#DAE4F2", xl: "white" }}
			border="1px"
			borderColor="#DAE4F2" 
			borderRadius="32px"
			fontSize="xl"
			h={{ base: "408px", md: "477px", xl: "676px" }}
			m={6}
			p={3}
			transform={{ base: "none", xl: styles.transform }}
			w={{ base: "335px", md: "323px", xl: "532px" }}
			zIndex={20}
		>
			<Flex 
				border="1px"
				borderColor="#DAE4F2" 
				borderRadius="3xl" 
				direction="column"
				h="full"
			>
				<Flex 
					bgGradient="linear(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)"
					borderTopRadius="3xl"
					justifyContent="center"
				>
					<Flex display={{ base: "none", xl: "flex" }}>
						<Image
							alt={imageDesktop} 
							src={imageDesktop} 
							h="498px"
							w="508px"	
						/>
					</Flex>
					<Flex display={{ base: "flex", xl: "none" }}>
						<Image
							alt={imageResponsive} 
							src={imageResponsive} 
							h={{ base: "230px", md: "299px" }}
							w={{ base: "311px", md: "299px"	}}
						/>
					</Flex>
				</Flex>
				<Flex
					borderBottomRadius="3xl"
					bgColor="white"
					direction="column" 
					h="full" 
					justifyContent="center"
					px={6}
				>
					<HStack spacing={3}>
						<Box bgColor="#E5F0FF" borderRadius="lg" p={{ base: 1, xl: 2 }}>
							<Image alt={icon} src={icon}/>
						</Box>
						<Text
							bgClip="text"
							bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)" 
							fontSize={{ base: "2xl", xl: "32px" }}
							fontWeight="black"
						>{title}
						</Text>
					</HStack>
					<Text
						color="neutral.600"
						fontWeight="semibold"
						fontSize={{ base: "md", xl: "xl" }}
						pr={{ base: "none", xl: 6 }}
					>{description}
					</Text>
				</Flex>
			</Flex>
		</VStack>
	);
}

export default WalkthroughCard