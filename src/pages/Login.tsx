import { storedCount, storedCounter } from "@/data/counter";
import Input from "@components/Input";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Login() {
  const recoilCount = useRecoilValue(storedCounter);
  const navigate = useNavigate();
  const [count, setCount] = useRecoilState(storedCount);

  return (
    <div style={{ fontFamily: "sansRegular" }}>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <h1>Login</h1>
      <Input />
      <button onClick={() => setCount((count) => count + 1)}>카운트</button>
      <div>{count}</div>
      {recoilCount}
    </div>
  );
}
