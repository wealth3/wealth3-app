import React from "react";
import { Layout } from "../components/Layout";
import Image from "next/image"

const Dashboard = () => {
  return (
    <Layout>
      <div className="m-auto col-start-1 col-end-13 row-start-1">
        <Image src="/images/Group5384.png" className="mt-24" alt="" />
      </div>
    </Layout>
  );
};

export default Dashboard;
