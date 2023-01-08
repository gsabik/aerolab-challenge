import { Center, CircularProgress } from "@chakra-ui/react";

const Loader = () => {
	return (
		<Center h="100vh">
			<CircularProgress color="purple.500" isIndeterminate/>
		</Center>
	);
}

export default Loader