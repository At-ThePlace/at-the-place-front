import React, { useState } from "react";
import reactLogo from "@assets/react.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { storedCount, storedCounter } from "@/data/counter";

export default function Main() {
  const [count, setCount] = useRecoilState(storedCounter);
  const navigate = useNavigate();
  const loginValue = useRecoilValue(storedCount);

  return (
    <div className='p-5 '>
      <div>
        <h1>Main</h1>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          className='border'
          onClick={() => setCount((count) => count + 1)}
        >
          click to count up
        </button>
        <div>count is {count}</div>
        <div>login count {loginValue}</div>
      </div>

      <button className='border' onClick={() => navigate("/login")}>
        로그인 가기
      </button>
    </div>
  );
}
