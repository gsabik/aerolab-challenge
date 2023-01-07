import { 
	Button, 
	HStack,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text, 
	useDisclosure
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import aeropayOne from "../assets/icons/aeropay-1.svg";
import Aerocard from "./Aerocard";

const ModalPoints = () => {
	const { user } = useContext(UserContext);
	const { isOpen, onOpen, onClose } = useDisclosure();

	console.log(user)
	return (
		<>
			<Button
				bgColor="white"
				boxShadow="sm"
				border="1px"
				borderColor="#DAE4F2"
				borderRadius="xl"
				onClick={onOpen}
			>
				<HStack>
					<Image src={aeropayOne}/>
					<Text>{user.points}</Text>
				</HStack>
			</Button>
			<Modal
				isCentered
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>Add balance</ModalHeader>
					<ModalBody>
						<Aerocard/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ModalPoints