import { AuthContextProvider, AppContextProvider } from "contexts";
import { SearchParamsProvider } from "./contexts/search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyRoutes, ProtectedRoutes } from "routers/index";

function App() {
  
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <SearchParamsProvider>
        <AppContextProvider>
          <AuthContextProvider>
            {window.location.pathname.includes("auth") ? (
              <ProtectedRoutes />
            ) : (
              <MyRoutes />
            )}
          </AuthContextProvider>
          <ToastContainer />
        </AppContextProvider>
      </SearchParamsProvider>
    </div>
  );
}

export default App;
