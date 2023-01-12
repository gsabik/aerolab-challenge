import { 
	Box, 
	Container, 
	HStack,
	Image,
	Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/aerolab-logo-1.svg";
import ModalPoints from "./ModalPoints";

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
					<HStack spacing={3}>
						<Link to="/history">
							<Text fontWeight="medium">Redeem history</Text>
						</Link>
						<ModalPoints/>
					</HStack>
				</HStack>
			</Container>
		</Box>
	);
}

export default Navbar