import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="col-start-2 col-end-6 row-start-2 flex flex-col gap-7">
        <h2 className="text-black text-6xl font-synco font-bold">
          Welcome <br /> to <br /> wealth 3
        </h2>
        <span className="text-black text-xl font-synco font-bold">
          Protect your funds and future while securing the network
        </span>
      </div>
    </Layout>
  );
}
