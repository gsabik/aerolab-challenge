import { 
	createContext, 
	useEffect, 
	useState 
} from "react";
import { requestUser } from "../api/api";
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

	useEffect(() => {
		getUser();
	}, []);
	
	if(!user || loading === true ) {
		return <Loader/>;
	}

	return(
		<UserContext.Provider value={{
			user
		}}>
			{children}
		</UserContext.Provider>																		
	);
}