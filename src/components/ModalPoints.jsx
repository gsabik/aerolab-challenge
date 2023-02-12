import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { 
	Box,
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
import { AMOUNTS } from "../utils/utils";
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
				fontSize="xl"
				onClick={onOpen}
			>
				<HStack>
					<Image src={aeropayOne}/>
					<Text bgClip="text" bgGradient="linear(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)">{user.points.toLocaleString()}</Text>
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
				<ModalContent fontSize="xl">
					<ModalHeader>Add balance</ModalHeader>
					<Divider/>
					<ModalBody py={6}>
						<VStack spacing={6}>
							<Aerocard/>
							<HStack justifyContent="space-between" w="full">
								{
									AMOUNTS.map(amount => (
										<Box
											bgClip="text"
											bg={`#E5F0FF ${amount === points ? "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)" : ""}`}
											borderRadius="xl"
											cursor="pointer"
											_hover={
												amount === points && {
													bgGradient: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"
												}
											}
											onClick={() => setPoints(amount)} 
											key={amount}
											p={2}
											textAlign="center"	
											w="full"
										>
											<Text
												bgClip="text"
												bgGradient={amount === points ? "" : "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"}
												color={amount === points && "white"}
												fontWeight="semibold"
											>{amount.toLocaleString()}</Text>
										</Box>
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
									<Text>Add points</Text>
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