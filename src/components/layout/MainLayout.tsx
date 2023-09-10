import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <div className='max-w-[520px] mx-auto h-screen border'>
        <div>DMDKDKKDKD</div>
        <Outlet />
      </div>
    </div>
  );
}
