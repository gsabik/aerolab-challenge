import { Flex } from "@chakra-ui/react";
import { walkthroughCardsData } from "../data";
import WalkthroughCard from "./WalkthroughCard";

const Walkthrough = () => {
	return (
		<Flex
			alignItems="center" 
			bgGradient="linear(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)"
			direction={{ base: "column", lg: "row" }} 
			h={{ base: "auto", xl: "528px"}}
			justifyContent="center"
			my={24}
			pt={{ base: 24, xl: 0 }}
			w="full"
			>
				{
					walkthroughCardsData.map(card => (<WalkthroughCard key={card.title} {...card}/>))
				}
		</Flex>
	);
}

export default Walkthrough