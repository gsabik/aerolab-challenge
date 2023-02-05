import { Center, CircularProgress } from "@chakra-ui/react";

const Loader = ({ customHeight }) => {
	return (
		<Center h={customHeight}>
			<CircularProgress color="purple.500" isIndeterminate/>
		</Center>
	);
}

export default Loader