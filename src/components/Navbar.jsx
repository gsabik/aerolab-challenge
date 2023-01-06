import { 
	Box, 
	Container, 
	HStack,
	Image,
} from "@chakra-ui/react";
import logo from "../assets/icons/aerolab-logo-1.svg";
import ModalLayout from "./Modal/ModalLayout";

const Navbar = () => {
	return (
		<Box>
			<Container maxWidth="6xl">
				<HStack
					alignItems="center"
					as="nav"
					justifyContent="space-between" 
					py={6}
				>
					<Image src={logo}/>
					<ModalLayout/>
				</HStack>
			</Container>
		</Box>
	);
}

export default Navbar