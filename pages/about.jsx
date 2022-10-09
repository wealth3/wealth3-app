import React from "react";
import { Layout } from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <div className="col-start-1 col-end-12 row-start-3 flex flex-col gap-8">
        <h2 className="text-3xl text-black font-synco">
          Wealth3 is a deads-man switch protocol, that allows users to lock ETH
          and get yield, and uses it to run validator nodes on Ethereum. <br />
          Users can set up the fund lockup duration, and how much time should
          run by until they are considered inactive. It also lets them set up
          trusted wallets that should receive the funds in case the user goes
          inactive. This situation would trigger the distribution of their funds
          to their trusted wallets. <br /> Proof of life is achieved by
          depositing Ether into the fund or by executing a method on the
          contract. Users will get reminded to interact with the contract via
          Push protocol. After the time is due, users will receive their funds
          and yield interest from running the node. The protocol keeps 1% of the
          yield generated as an asset management fee.
        </h2>
      </div>
    </Layout>
  );
};

export default about;
