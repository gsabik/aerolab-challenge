import { 
	Box, 
	Button, 
	Container, 
	HStack,
	Image,
	Text
} from "@chakra-ui/react";
import logo from "../assets/icons/aerolab-logo-1.svg";
import chevronActive from "../assets/icons/chevron-active.svg";
import aeropay from "../assets/icons/aeropay-1.svg";

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
					<Button
						bgColor="white"
						boxShadow="sm"
						border="1px"
						borderColor="gray.200"
						borderRadius="xl"
					>
						<HStack>
							<Image src={aeropay}/>
							<Text>10.000</Text>
						</HStack>
					</Button>
				</HStack>
			</Container>
		</Box>
	);
}

export default Navbar