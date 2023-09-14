import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  emailState,
  nameState,
  passwordState,
  checkPasswordState,
  emailMessageState,
  passwordMessageState,
  passwordErrorState,
} from "@/data/signUpData";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useRecoilState(emailState);
  const [name, setName] = useRecoilState(nameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [checkPassword, setCheckPassword] = useRecoilState(checkPasswordState);
  const [emailMessage, setEmailMessage] = useRecoilState(emailMessageState);
  const [passwordError, setPasswordError] = useRecoilState(passwordErrorState);
  const [passwordMessage, setPasswordMessage] =
    useRecoilState(passwordMessageState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, name, password, checkPassword);
    navigate("/");
  };

  const emailCheck = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailPattern =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

    if (!emailPattern.test(currentEmail)) {
      setEmailMessage("이메일을 다시 확인해주세요.");
    } else {
      setEmailMessage("사용가능한 이메일입니다.");
    }
  };

  const passwordCheck = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    if (!passwordPattern.test(currentPassword)) {
      setPasswordMessage(
        "비밀번호는 영문/숫자를 포함한 8자에서 20자여야 합니다."
      );
    } else {
      setPasswordMessage("사용가능한 비밀번호입니다.");
    }
  };

  const confirmPassword = useCallback(
    (e) => {
      const currentCheckPassword = e.target.value;
      setCheckPassword(currentCheckPassword);

      if (password !== checkPassword) {
        setPasswordError("비밀번호가 일치하지 않습니다");
      } else {
        setPasswordError("비밀번호가 일치합니다");
      }
    },
    [password, checkPassword]
  );

  return (
    <div className="container mx-auto mt-8">
      <h2 className="w-30 mx-auto mt-8 text-center text-2xl font-bold">
        회원가입
      </h2>
      <form className="mt-8 space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <label htmlFor="userEmail" className="w-24">
            이메일:
          </label>
          <input
            type="text"
            id="userEmail"
            value={email}
            onChange={emailCheck}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="ex) attheplace@gmail.com"
            required
          />
        </div>
        <p className="emailMessage">{emailMessage}</p>
        <div className="flex items-center">
          <label htmlFor="userName" className="w-24">
            닉네임:
          </label>
          <input
            type="text"
            id="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="ex) homeprotector"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="password" className="w-24">
            비밀번호:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordCheck}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="영문/숫자를 조합 (8자 이상)"
            required
          />
        </div>
        <p className="passworMessage">{passwordMessage}</p>
        <div className="flex items-center">
          <label htmlFor="checkPassword" className="w-24">
            비밀번호 확인:
          </label>
          <input
            type="password"
            id="checkPassword"
            value={checkPassword}
            onChange={confirmPassword}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            required
          />
        </div>
        <p className="checkPasswordError">{passwordError}</p>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          가입하기
        </button>
      </form>
    </div>
  );
}
