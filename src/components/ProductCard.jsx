import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { 
	Button,
	Card, 
	CardBody, 
	CardFooter, 
	Divider, 
	Flex, 
	HStack, 
	Image,
	Text,
	VStack 
} from "@chakra-ui/react";
import aeropayThree from "../assets/icons/aeropay-3.svg";
import aeropayThreeGray from "../assets/icons/aerolab-logo-gray.svg";

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
			>
				<HStack>
					<Text>{canBuy ? "Redeem for" : "You need"}</Text>
					<Image src={canBuy ? aeropayThree : aeropayThreeGray}/>
					<Text>{(canBuy ? product.cost : product.cost - user.points).toLocaleString()}</Text>
				</HStack>
			</Button>
		</VStack>
	);
}

export default ProductCard