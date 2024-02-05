// Print.js
import React from "react";
import { RecoilRoot } from "recoil";
import { Outlet } from "react-router-dom";

function Print() {
  return (
    <RecoilRoot>
      <div>
        <h1 style={{ textAlign: "center" }}>여기는 프린트하는 공용pc입니다</h1>
        <Outlet />
      </div>
    </RecoilRoot>
  );
}

export default Print;
