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
	const { user, redeemProduct } = useContext(UserContext);

	const canBuy = product.cost <= user.points;

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
				bgGradient={canBuy && "linear(to-r, #176FEB, #FF80FF)"}
				color={canBuy ? "white" : "neutral.600"}
				disabled={!canBuy} 
				onClick={() => redeemProduct(product)}
				w="full"
			>{canBuy ? `Redeem for ${product.cost}` : `You need ${product.cost - user.points}`}
			</Button>
		</VStack>
	);
}

export default ProductCard