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
	const [points, setPoints] = useState(false);
	const { user, addPoints } = useContext(UserContext);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button
				bgColor="white"
				border="1px"
				boxShadow="sm"
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
				size="xs"
			>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>Add balance</ModalHeader>
					<ModalBody py={6}>
						<VStack spacing={6}>
							<Aerocard/>
							<HStack justifyContent="space-between" w="full">
								{
									AMOUNTS.map(amount => (
										<Button
											bgGradient={amount === points ? "linear(to-r, #176FEB, #FF80FF)" : "#E5F0FF"}
											borderRadius="md"
											color={amount === points ? "white" : "#176FEB"}
											fontSize="lg"
											onClick={() => setPoints(amount)} 
											key={amount}
											w="full"
										>{amount.toLocaleString()}
										</Button>
									))
								}
							</HStack>
						</VStack>
						<Flex justifyContent="center" w="full">
							<Button
								bgGradient="linear(to-r, #176FEB, #FF80FF)"
								color="white"
								onClick={() => addPoints(points)}
								mt={6}
								size="lg"
								w="full"
							>
								<HStack>
									<Image src={aeropayThree}/>
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