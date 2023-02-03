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

const TableHistory = () => {
	const [redeemHistory, setRedeemHistory] = useState([]);

	const getRedeemHistory = async() => {
		const data = await requestRedeemHistory();
		setRedeemHistory(data);
	}

	useEffect(() => {
		getRedeemHistory();
	}, []);

	return (
		<TableContainer w="full">
			<Table variant="striped" size="lg">
				<Thead>
					<Tr>
						<Th>Product</Th>
						<Th>Transaction ID</Th>
						<Th>Date</Th>
						<Th>Cost</Th>
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
	);
}

export default TableHistory