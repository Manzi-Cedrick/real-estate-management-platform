import { AuthContextProvider, AppContextProvider } from "contexts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyRouter from "routers/index";

function App() {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <AppContextProvider>
        <AuthContextProvider>
          <MyRouter />
        </AuthContextProvider>
        <ToastContainer />
      </AppContextProvider>
    </div>
  );
}

export default App;
