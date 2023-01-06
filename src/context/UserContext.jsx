import { 
	createContext, 
	useEffect, 
	useState 
} from "react";
import { requestUser } from "../api/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const getUser = async() => {
		const data = await requestUser();
		setUser(data);
	}

	useEffect(() => {
		getUser();
	}, []);

	return(
		<UserContext.Provider value={{
			user
		}}>
			{children}
		</UserContext.Provider>																		
	);
}