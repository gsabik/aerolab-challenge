import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { 
	Button, 
	Divider, 
	Flex, 
	HStack,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text, 
	useDisclosure,
	VStack
} from "@chakra-ui/react";
import { AMOUNTS } from "../utils";
import aeropayOne from "../assets/icons/aeropay-1.svg";
import aeropayThree from "../assets/icons/aeropay-3.svg";
import Aerocard from "./Aerocard";

const ModalPoints = () => {
	const [points, setPoints] = useState(5000);
	const { user, addPoints } = useContext(UserContext);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button
				bgColor="white"
				border="1px"
				boxShadow="md"
				borderColor="#DAE4F2"
				borderRadius="xl"
				onClick={onOpen}
			>
				<HStack>
					<Image src={aeropayOne}/>
					<Text>{user.points.toLocaleString()}</Text>
				</HStack>
			</Button>
			<Modal
				isCentered
				isOpen={isOpen}
				onClose={onClose}
				motionPreset="slideInBottom"
				size="sm"
			>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>Add balance</ModalHeader>
					<Divider/>
					<ModalBody py={6}>
						<VStack spacing={6}>
							<Aerocard/>
							<HStack justifyContent="space-between" w="full">
								{
									AMOUNTS.map(amount => (
										<Button
											bgClip={amount === points ? "" : "text"}
											bgGradient="linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"
											fontSize="lg"
											borderRadius="xl"
											_hover={
												amount === points && {
													bgGradient: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"
												}
											}
											onClick={() => setPoints(amount)} 
											key={amount}
											w="full"
										>
											<Text color={amount === points && "white"}>{amount.toLocaleString()}</Text>
										</Button>
									))
								}
							</HStack>
						</VStack>
						<Flex justifyContent="center" w="full">
							<Button
								bgGradient="linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)"
								borderRadius="2xl"
								color="white"
								_hover={{
									bgGradient: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"
								}}
								onClick={() => addPoints(points)}
								mt={6}
								size="lg"
								w="full"
							>
								<HStack>
									<Image alt={aeropayThree} src={aeropayThree}/>
									<Text fontSize="xl">Add points</Text>
								</HStack>
							</Button>
						</Flex> 
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ModalPoints