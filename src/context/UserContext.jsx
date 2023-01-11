import { 
	createContext, 
	useEffect, 
	useState 
} from "react";
import { requestUser, postPoints } from "../api/api";
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
		if(!user) return;

		return await postPoints(amount).then(() => {
			setUser({...user, points: user.points + amount});
		});
	}

	useEffect(() => {
		getUser();
	}, []);
	
	if(!user || loading === true ) {
		return <Loader/>;
	}

	return(
		<UserContext.Provider value={{
			user,
			addPoints
		}}>
			{children}
		</UserContext.Provider>																		
	);
}