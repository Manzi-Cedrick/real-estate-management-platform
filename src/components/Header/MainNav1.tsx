import React, { FC, useEffect, useState } from "react";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "components/HeroSearchForm2Mobile/HeroSearchForm2MobileFactory";
import { useAuth, useApp } from "../../contexts";
import { toast } from "react-toastify";

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {
  const { isLogin, setIsLogin } = useApp()
  const { logOut, user } = useAuth();
  const [headerState, setHeaderState] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const logOutUser = async () => {
    await logOut();
  }

  const handleSignChange = () => {
    setIsLogin((prev) => !prev);
  }

  useEffect(() => {
    if (user && user.uid) {
      setLoading(true);
      setHeaderState(true);
      setLoading(false);
      toast("Login successfully", { type: "success" });
    }
  }, [user])

  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center">
        <div className="hidden md:flex justify-start flex-1 items-center space-x-4 sm:space-x-10">
          <Logo />
          <Navigation />
        </div>

        <div className="lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <HeroSearchForm2MobileFactory />
        </div>

        <div className="hidden md:flex flex-shrink-0 items-center justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex items-center space-x-0.5">
            <SwitchDarkMode />
            <SearchDropdown />
            <div className="px-1" />
            {headerState == false &&
              <ButtonPrimary href={isLogin ? "/login" : "/signup"} onClick={handleSignChange} className="w-[150px]">{isLogin ? "Sign in" : "Sign up"}</ButtonPrimary>
            }
            {headerState == true &&
              <ButtonPrimary href="/login" onClick={() => { logOutUser(); setHeaderState(false); }}>Log out</ButtonPrimary>
            }
          </div>
          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
