import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto h-screen">
      <div className="mt-4 w-full flex justify-between">
        <h1 className="text-black text-3xl font-synco font-bold">Wealth3</h1>
        <ConnectButton />
      </div>
      <div className="griddie  flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  );
};
