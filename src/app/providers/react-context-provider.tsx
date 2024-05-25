import {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

interface AppContext {
	users: string;
	setUsers: Dispatch<SetStateAction<string>>;
	wallets: string[];
	setWallets: Dispatch<SetStateAction<never[]>>;
}

export const UserContext = createContext<AppContext | null>(null);

const ReactStateProvider = ({ children }: { children: ReactNode }) => {
	const [users, setUsers] = useState("");
	const [wallets, setWallets] = useState([]);
	return (
		<UserContext.Provider value={{ users, setUsers, wallets, setWallets }}>
			{children}
		</UserContext.Provider>
	);
};

export { ReactStateProvider };

export const useUserState = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw Error("Context just can be used within the Provider!");
	}
	return context;
};
