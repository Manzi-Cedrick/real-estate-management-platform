import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

export interface PageSignUpProps {
  className?: string;
}

const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  const { googleSignIn, user } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [emailChange, setEamilChange] = useState<string>("")
  const [passwordChange, setPasswordChange] = useState<string>("");
  const exp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const emailSignUp = () => {
    if (emailChange.match(exp) == null) {
      toast("Please enter your email!", { type: "info" });
    } else if (passwordChange == "") {
      toast("Please enter your passsord!", { type: "info" });
    } else {
      createUserWithEmailAndPassword(auth, emailChange, passwordChange)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setDoc(doc(db, "Users", user.uid), {
            uid: user.uid,
            email: user.email,
          });
          window.location.href = "/auth/dashboard";
        })
        .catch((error) => {
          if (error.code == "auth/weak-password")
            toast("Password should be at least 6 characters!", { type: "error" });
          if (error.code == "auth/email-already-in-use")
            toast("Email already in used!", { type: "error" });
        });
    }
  };

  useEffect(() => {
    const setUserInfo = async () => {
      setLoading(true);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLoading(false);
        window.location.href = "/auth/dashboard";
      } else {
        const data = {
          userId: user.uid,
          metode: user.providerData[0].providerId
        };
        await setDoc(doc(db, "Users", user.uid), data);
        setLoading(false);
        window.location.href = "/auth/dashboard";
      }
    }
    if (user && user.uid) {
      setUserInfo();
    }
  }, [user])

  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Lotus Revenu</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            <button
              className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                className="flex-shrink-0"
                src={facebookSvg}
                alt={"Continue with Facebook"}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                {"Continue with Facebook"}
              </h3>
            </button>
            <button
              className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                className="flex-shrink-0"
                src={twitterSvg}
                alt={"Continue with Twitter"}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                {"Continue with Twitter"}
              </h3>
            </button>
            <button
              className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              onClick={() => { googleSignIn(); }}
            >
              <img
                className="flex-shrink-0"
                src={googleSvg}
                alt={"Continue with Google"}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                {"Continue with Google"}
              </h3>
            </button>
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <div className="grid grid-cols-1 gap-6" >
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                onChange={(e) => setEamilChange(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input type="password" className="mt-1" onChange={(e) => setPasswordChange(e.target.value)} />
            </label>
            <ButtonPrimary onClick={() => emailSignUp()}>Continue</ButtonPrimary>
          </div>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </div >
  );
};

export default PageSignUp;
