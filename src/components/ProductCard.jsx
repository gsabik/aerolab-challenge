import { 
	Button,
	Card, 
	CardBody, 
	CardFooter, 
	Divider, 
	Flex, 
	Image,
	Text,
	VStack 
} from "@chakra-ui/react";

const ProductCard = ({ _id, name, category, cost, img }) => {

	return (
		<VStack spacing={4}>
			<Card boxShadow="md">
				<CardBody>
					<Image py={6} src={img.url}/>
				</CardBody>
				<Divider/>
				<CardFooter>
					<Flex direction="column">
						<Text fontWeight="semibold">{name}</Text>
						<Text color="neutral.600">{category}</Text>
					</Flex>
				</CardFooter>
			</Card>
			<Button 
				bgGradient="linear(to-r, #176FEB, #FF80FF)"
				color="white" 
				_hover={{
					bgGradient: "linear(to-r, #1667D9, #F279F2)"
				}}
				w="full"
			>Redeem for {cost}
			</Button>
		</VStack>
	);
}

export default ProductCard