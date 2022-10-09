import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Layout } from "../components/Layout";
import Link from "next/link";

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
      <div className="col-start-6 col-end-8 row-start-5 flex justify-center items-center">
        <Link href="/dashboard">
          <a
            href=""
            className="bg-[#FEAEA5] rounded-lg shadow-lg px-6 py-4 text-black text-xl"
          >
            Deposit!
          </a>
        </Link>
      </div>
    </Layout>
  );
}
