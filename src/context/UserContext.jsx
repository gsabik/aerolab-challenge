import { 
	createContext, 
	useEffect, 
	useState 
} from "react";
import { requestUser, postPoints, postProduct } from "../api/api";
import Loader from "../components/Loader";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	const getUser = async() => {
		const data = await requestUser();
		setUser(data);
		setLoading(false);
	}

	const addPoints = async(amount) => {
		return await postPoints(amount).then(() => {
			setUser({...user, points: user.points + amount});
		});
	}

	const redeemProduct = async(product) => {
		return await postProduct(product._id).then(() => {
			setUser({
				...user, 
				points: user.points - product.cost,
				redeemHistory: [...user.redeemHistory, product]
			});
		});
	}

	useEffect(() => {
		getUser();
	}, []);
	
	if (!user || loading === true ) {
		return <Loader customHeight="100vh"/>;
	}

	return(
		<UserContext.Provider value={{
			user,
			addPoints,
			redeemProduct
		}}>
			{children}
		</UserContext.Provider>																		
	);
}