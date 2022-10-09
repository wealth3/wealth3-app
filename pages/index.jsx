import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Layout } from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="col-start-1 col-end-9 row-start-3 flex flex-col gap-8">
        <h2 className="text-black text-8xl font-synco font-bold">
          Better safe <br /> than sorry.
        </h2>
        <span className="text-black text-3xl font-synco ">
          <b>Wealth3</b> is a tool for locked savings that guarantees they won&apos;t get
          lost.
          <br />
          You care for your people as for the Ethereum network.
        </span>
        <Link href="/form">
          <a
            href=""
            className="bg-[#FFFF] rounded-lg shadow-lg py-4 text-black w-60 text-center font-synco text-sm text-bold"
          >
            Secure your assets!
          </a>
        </Link>
      </div>
    </Layout>
  );
}
