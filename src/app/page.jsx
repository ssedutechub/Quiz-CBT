"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/Logo.jpg";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "./onBoard.css";

const Onboard = () => {
  const router = useRouter();

  useEffect(() => {
    const loggedInUser =
      typeof window !== "undefined"
        ? localStorage.getItem("loggedInUser")
        : null;
    if (loggedInUser) {
      router.push("./home");
    }
  }, []);

  const inputField = [useRef(), useRef(), useRef(), useRef()];
  const toggleBtn = [useRef(), useRef()];
  const maiN = useRef();
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    const inputs = inputField.map((ref) => ref.current);
    const toggle_btn = toggleBtn.map((ref) => ref.current);
    const main = maiN.current;
    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
      });
    });

    toggle_btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
      });
    });
  }, []);

  // this is the normal signUp Function. Uncomment this after the bootcamp
  // const signUp = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("userName", signUpName);
  //   localStorage.setItem("userEmail", signUpEmail);
  //   localStorage.setItem("userPassword", signUpPassword);
  //   Swal.fire({
  //     title: "Success!",
  //     text: "Sign up Successful!",
  //     icon: "success",
  //     confirmButtonText: "Thanks",
  //   });
  //   setSignUpEmail("")
  //   setSignUpName("")
  //   setSignUpPassword("")
  // };

  // this is the normal login Function. Uncomment this after the bootcamp
  // const login = (e) => {
  //   e.preventDefault();
  //   const storedUserName = localStorage.getItem("userName");
  //   const storedUserPassword = localStorage.getItem("userPassword");
  //   if (loginName === storedUserName && loginPassword === storedUserPassword) {
  //     Swal.fire({
  //       title: "Success!",
  //       text: `Welcome ${loginName}`,
  //       icon: "success",
  //       confirmButtonText: "Thanks",
  //     });
  //     localStorage.setItem("loggedInUser", loginName);
  //     router.push("./home");
  //     setLoginName("")
  //     setLoginPassword("")
  //   } else {
  //     Swal.fire({
  //       title: "Error!",
  //       text: "Login failed. Please check your credentials.",
  //       icon: "error",
  //       confirmButtonText: "Thanks",
  //     });
  //   }
  // };

  // this is only for the bootcamp. comment this after the bootcamp
  //
  if (typeof window !== "undefined") {
    localStorage.setItem("userName1", "AKWUOLE MICHAEL");
    localStorage.setItem("userName2", "OLADITAN BASIT");
    localStorage.setItem("userName3", "OYATOLU WARIZ");
    localStorage.setItem("userName4", "OYATOLU JAMIU");
    localStorage.setItem("userName5", "CHUKWUDI MARVIN");
    localStorage.setItem("userName6", "ABIMBOLA DAVID");
    localStorage.setItem("userName7", "ABIMBOLA CHRISTIANA");
    localStorage.setItem("userName8", "GHANDI WEAGLE");
    localStorage.setItem("userName9", "CHUKWUDI BONAVENTURE");
    localStorage.setItem("userName10", "MISBAUDEEN MARYAM");
    localStorage.setItem("userName11", "ISHOLA FAROUK");
    

    localStorage.setItem("userName12", "AKHIDIME KELLY");
    localStorage.setItem("userName13", "DUROSANYA TUNMISE");
    localStorage.setItem("userName14", "OLADITAN RIDWAN");
    localStorage.setItem("userName15", "ONANI FRANCIS");
    localStorage.setItem("userName16", "OLADITAN BABATUNDE");
    localStorage.setItem("userName17", "OTOAYE MUBARAK");
    localStorage.setItem("userName18", "MISBAUDEEN SUMAYYAH");
    localStorage.setItem("userName19", "NWACHUKWU ESTHER");


    localStorage.setItem("userName20", "MICHAEL PAULA");
    localStorage.setItem("userName21", "IYAMU JOSE");

    localStorage.setItem("admin", "SSEDUTECHUB");
    localStorage.setItem("password", "080808");
  }

  const login = (e) => {
    e.preventDefault();
    const storedUserName1 = localStorage.getItem("userName1");
    const storedUserName2 = localStorage.getItem("userName2");
    const storedUserName3 = localStorage.getItem("userName3");
    const storedUserName4 = localStorage.getItem("userName4");
    const storedUserName5 = localStorage.getItem("userName5");
    const storedUserName6 = localStorage.getItem("userName6");
    const storedUserName7 = localStorage.getItem("userName7");
    const storedUserName8 = localStorage.getItem("userName8");
    const storedUserName9 = localStorage.getItem("userName9");
    const storedUserName10 = localStorage.getItem("userName10");
    const storedUserName11 = localStorage.getItem("userName11");
    const storedUserName12 = localStorage.getItem("userName12");
    const storedUserName13 = localStorage.getItem("userName13");
    const storedUserName14 = localStorage.getItem("userName14");
    const storedUserName15 = localStorage.getItem("userName15");
    const storedUserName16 = localStorage.getItem("userName16");
    const storedUserName17 = localStorage.getItem("userName17");
    const storedUserName18 = localStorage.getItem("userName18");
    const storedUserName19 = localStorage.getItem("userName19");
    const storedUserName20 = localStorage.getItem("userName20");
    const storedUserName21 = localStorage.getItem("userName21");
    const storedAdmin = localStorage.getItem("admin");

    const storedUserPassword = localStorage.getItem("password");
    if (
      (loginName === storedUserName1 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName2 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName3 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName4 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName5 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName6 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName7 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName8 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName9 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName10 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName11 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName12 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName13 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName14 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName15 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName16 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName17 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName18 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName19 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName20 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName21 && loginPassword === storedUserPassword) ||
      (loginName === storedAdmin && loginPassword === storedUserPassword)
    ) {
      Swal.fire({
        title: "Success!",
        text: `Welcome ${loginName}`,
        icon: "success",
        confirmButtonText: "Thanks",
      });
      localStorage.setItem("loggedInUser", loginName);
      router.push("./home");
      setLoginName("");
      setLoginPassword("");
    } else {
      // Swal.fire({
      //   title: "Error!",
      //   text: "Login failed. Please check your credentials.",
      //   icon: "error",
      //   confirmButtonText: "Thanks",
      // });

      router.push("./showError");
    }
  };

  const getHelp = () => {
    Swal.fire({
      title: "Info!",
      text:
        "Inspect the webpage and check the application tab (under Local Storage).",
      icon: "info",
      confirmButtonText: "Thanks",
    });
  };

  return (
    <main ref={maiN}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action="index.html"
              autoComplete="off"
              className="sign-in-form"
            >
              <div className="logo">
                <Image
                  src={logo}
                  className="logoImage"
                  style={{
                    width: "60px",
                    marginRight: "0.3rem",
                    height: "auto",
                  }}
                  alt="logo"
                />
                <h4>Standard Success Edu-Tech Hub</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet? </h6>
                <Link href="#" className="toggle" ref={toggleBtn[0]}>
                  Sign up
                </Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    ref={inputField[0]}
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    ref={inputField[1]}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <input
                  type="submit"
                  value="Sign In"
                  className="sign-btn"
                  onClick={login}
                />

                <p className="text">
                  Forgotten your password or your login datails?
                  <Link href="#" onClick={getHelp}>
                    Get help
                  </Link>{" "}
                  signing in
                </p>
                <br />
                <p className="text">
                  &copy;{new Date().getFullYear()} SSEDUTECHUB. All Rights Reserved
                </p>
              </div>
            </form>

            <form
              action="index.html"
              autoComplete="off"
              className="sign-up-form"
            >
              <div className="logo">
                <Image
                  src={logo}
                  className="logoImage"
                  style={{
                    width: "60px",
                    marginRight: "0.3rem",
                    height: "auto",
                  }}
                  alt="logo"
                />
                <h4>Standard Success Edu-Tech Hub</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account? </h6>
                <Link href="#" className="toggle" ref={toggleBtn[1]}>
                  Sign in
                </Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    ref={inputField[2]}
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    value={signUpEmail}
                    ref={inputField[3]}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    ref={inputField[4]}
                    placeholder="Password"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  {/* <label>Password</label> */}
                </div>

                <input
                  type="submit"
                  value="Sign Up"
                  className="sign-btn"
                  // onClick={signUp}
                />

                <p className="text">
                  By signing up, I agree to the
                  <Link href="#"> Terms of Services</Link> and
                  <Link href="#"> Privacy Policy</Link>
                </p>
                <br />
                <p className="text">
                  &copy;{new Date().getFullYear()} SSEDUTECHUB. All Rights Reserved
                </p>
              </div>
            </form>
          </div>

          <div className="carousel"></div>
        </div>
      </div>
    </main>
  );
};

export default Onboard;
