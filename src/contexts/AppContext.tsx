import { useContext, createContext, useState } from "react";

interface IAppContext {
	isLogin: boolean,
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
}

const AppContext = createContext<IAppContext>({
	isLogin: false,
	setIsLogin: () => { },
});

export const AppContextProvider = ({ children }: { children: any }) => {
	const [isLogin, setIsLogin] = useState<boolean>(false)

	return (
		<AppContext.Provider value={{ isLogin, setIsLogin }}>
			{children}
		</AppContext.Provider>
	)
}

export const useApp = () => {
	return useContext(AppContext);
}