import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import Link from "next/link";

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto h-screen">
      <div className="mt-4 w-full flex justify-between">
        <div className="flex gap-16 justify-center items-center">
          <h1 className="text-black text-3xl font-synco font-bold">W3</h1>
          <Link href="/about">
            <a className="text-black text-2xl font-synco ">ABOUT</a>
          </Link>
          <Link href="">
            <a className="text-black text-2xl font-synco ">DOCS</a>
          </Link>
        </div>
        <ConnectButton />
      </div>
      <div className="griddie flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  );
};
