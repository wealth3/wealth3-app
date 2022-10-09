import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#FBE7E7] griddie flex justify-center items-center">
      <div className="col-start-3 col-end-7 flex flex-col gap-7">
        <h2 className="text-black text-6xl font-synco font-bold">
          Welcome
          <br /> to <br /> wealth 3
        </h2>
        <span className="text-black text-xl font-synco font-bold">
          Protect your funds and future while securing the network
        </span>
      </div>
      <div className="col-start-8 col-end-11">
        <ConnectButton />
      </div>
    </div>
  );
}
