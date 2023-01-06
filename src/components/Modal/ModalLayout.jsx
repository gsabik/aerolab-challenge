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
import aeropay from "../../assets/icons/aeropay-1.svg";
import { UserContext } from "../../context/UserContext";

const ModalLayout = () => {
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
					<Image src={aeropay}/>
					<Text>10.000</Text>
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
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ModalLayout