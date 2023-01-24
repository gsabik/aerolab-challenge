import { Link } from "react-router-dom";
import { 
	Box, 
	Container, 
	Flex,
	HStack,
	Image,
	Icon,
	Tooltip
} from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons"
import logo from "../assets/icons/aerolab-logo-1.svg";
import ModalPoints from "./ModalPoints";

const Navbar = () => {
	return (
		<Box>
			<Container maxWidth="8xl">
				<Flex
					alignItems="center"
					as="nav"
					justifyContent="space-between" 
					py={6}
				>
					<Image alt={logo} src={logo}/>
					<HStack spacing={6}>
						<Link to="/history">
							<Tooltip hasArrow label="Redeem history">
								<Icon 
									as={RepeatClockIcon}
									boxSize={6}
									color="#DAE4F2" 
								/>
							</Tooltip>
						</Link>
						<ModalPoints/>
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
}

export default Navbar