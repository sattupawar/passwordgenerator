import React, { useEffect, useRef, useState } from "react";
import "./PasswordGenerator.css";

export const PasswordGenerator = () => {
  // now write a logic to build the password generator function that build the generate the password :

  let [numbers, setNumbers] = useState(true);
  let [symbols, setSymbols] = useState(true);
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [length, setLength] = useState(6);
  let [password, setPassword] = useState("");
  let [disabled, setDisabled] = useState(false);
  // let [check, setCheck] = useState(false);
  // let [character, setCharacter] = useState(true);

  // if (character) {
  //   setUppercase(true);
  //   setLowercase(true);
  //   setNumbers(true);
  //   setSymbols(true);
  // }

  // create a reference :
  let passwordRef = useRef(null);

  const copy = () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 8);
    let passwordTrim = passwordRef.current?.value.slice(0, 8);

    window.navigator.clipboard.writeText( passwordTrim);
  };
  const passwordGenerator = () => {
    let pass = "";
    let fullStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) {
      fullStr += "0123456789";
    }
    if (symbols) {
      fullStr += "!@#$%^&*";
    }
    if (uppercase) {
      fullStr += "";
      fullStr + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      fullStr + "";
      fullStr + "abcdefghijklmnopqrstuvwxyz";
    }

    // here write a for loop to generate the password generator  :

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * fullStr.length + 1);
      pass += fullStr.charAt(random);
    }
    setPassword(pass);
  };

  //   now i want to use the useeffect so when i change the length automatically my password value also change and see the live:

  useEffect(() => {
    passwordGenerator();
  }, [length, uppercase, lowercase, numbers, symbols]);

  return (
    <div className="parent">
      <div className="first-child">
        <form action="">
          <input type="text" readOnly value={password} ref={passwordRef} />
          </form>
          <div>
            <button
              className="reset-button"
              onClick={(e) => {
                e.preventDefault();
                passwordGenerator();
              }}
            >
              Reset
            </button>
          </div>
    
      </div>
      <div className="secound-child">
        <h1>Customize your password</h1>
        <form action="">
          <label htmlFor="">Password Length</label>
          <div className="secound-child-password-length">
            <input
            className="password-input"
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <input
            className="input-range"
              type="range"
              min={4}
              max={12}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="secound-child-option">
            <div className="secound-child-secound-option">
              <div>
                {" "}
                <input
                  type="checkbox"
                  disabled={disabled}
                  checked={numbers}
                  value={numbers}
                  onChange={() => setNumbers(!numbers)}
                />
                {""} Numbers <br />
              </div>
              <div>
                <input
                  type="checkbox"
                  disabled={disabled}
                  value={symbols}
                  checked={symbols}
                  onChange={() => setSymbols(!symbols)}
                />{" "}
                Symbols <br />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="third-child">
        {/* <button onClick={copy}>Copy Password</button> */}
        <input
          className="copy-button"
          type="button"
          value={"Copy"}
          onClick={copy}
        />
      </div>
    </div>
  );
};
