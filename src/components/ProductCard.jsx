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
		<VStack spacing={6}>
			<Flex 
				border="1px" 
				borderRadius="2xl" 
				borderColor="#DAE4F2" 
				direction="column"
				w="full"
			>
					<Flex justifyContent="center" w="full">
						<Image
							alt={product.name} 
							py={12} 
							src={product.img.url}
							w="300px"
						/>
					</Flex>
					<Divider/>
					<Flex direction="column" px={6} py={3} w="full">
						<Text fontSize="lg" fontWeight="semibold">{product.name}</Text>
						<Text color="neutral.600" fontSize="sm" textTransform="uppercase" fontWeight="semibold">{product.category}</Text>
					</Flex>
			</Flex>
			<Button 
				bgGradient={canBuy && "linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"}
				borderRadius="2xl"
				color={canBuy ? "white" : "neutral.600"}
				disabled={!canBuy} 
				fontSize="xl"
				_hover={
					canBuy && {
						bgGradient: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"
					}
				}
				onClick={() => redeemProduct(product)}
				h="60px"
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