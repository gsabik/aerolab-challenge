import { Link } from "react-router-dom";
import {
	Container,
	Flex,
	IconButton,
	VStack
} from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import TableHistory from "../components/TableHistory";

const RedeemHistory = () => {
	return (
		<Container maxWidth="8xl">
			<VStack py={12} spacing={6}>
				<Flex w="full">
					<Link to="/">
						<IconButton icon={<ArrowBackIcon/>} size="md"/>
					</Link>
				</Flex>
				<TableHistory/>
			</VStack>
		</Container>
	);
}

export default RedeemHistory