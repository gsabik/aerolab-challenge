import { useEffect, useState } from "react";
import { 
	Table, 
	TableContainer, 
	Tbody, 
	Td, 
	Tr, 
	Thead, 
	Th,
} from "@chakra-ui/react";
import { requestRedeemHistory } from "../api/api";
import { formattedDate } from "../utils";
import Loader from "./Loader";


const TableHistory = () => {
	const [redeemHistory, setRedeemHistory] = useState([]);
	const [loading, setLoading] = useState(true);
	
	const thData = ["Product", "Transaction ID", "Date", "Cost"];

	const getRedeemHistory = async() => {
		const data = await requestRedeemHistory();
		setRedeemHistory(data);
		setLoading(false);
	}

	useEffect(() => {
		getRedeemHistory();
	}, []);

	return (
		<>
			{
				loading 
				? 
				<Loader customHeight="70vh"/>
				:
				<TableContainer w="full">
					<Table size="lg" variant="striped">
						<Thead>
							<Tr>
								{
									thData.map(option => (
										<Th fontSize="lg" key={option}>{option}</Th>
									))
								}
							</Tr>
						</Thead>
						<Tbody>
							{
								redeemHistory.map(product => (
									<Tr key={product.createDate}>
										<Td fontWeight="semibold">{product.name}</Td>
										<Td>{product.productId}</Td>
										<Td>{formattedDate(product.createDate)}</Td>
										<Td>{product.cost.toLocaleString()}</Td>
									</Tr>
								))
							}
						</Tbody>
					</Table>
				</TableContainer>
			}
		</>
	);
}

export default TableHistory