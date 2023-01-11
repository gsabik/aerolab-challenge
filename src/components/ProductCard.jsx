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
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ProductCard = ({ product }) => {
	const { redeemProduct } = useContext(UserContext);

	return (
		<VStack spacing={4}>
			<Card boxShadow="md">
				<CardBody>
					<Image py={6} src={product.img.url}/>
				</CardBody>
				<Divider/>
				<CardFooter>
					<Flex direction="column">
						<Text fontWeight="semibold">{product.name}</Text>
						<Text color="neutral.600">{product.category}</Text>
					</Flex>
				</CardFooter>
			</Card>
			<Button 
				bgGradient="linear(to-r, #176FEB, #FF80FF)"
				color="white" 
				_hover={{
					bgGradient: "linear(to-r, #1667D9, #F279F2)"
				}}
				onClick={() => redeemProduct(product)}
				w="full"
			>Redeem for {product.cost}
			</Button>
		</VStack>
	);
}

export default ProductCard