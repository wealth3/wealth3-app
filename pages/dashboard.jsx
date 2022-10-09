import React from "react";
import { Layout } from "../components/Layout";
import { Input, TextField } from "@mui/material";
import AddressPercentage from "../components/AddressPercentage";

const dashboard = () => {
  return (
    <Layout>
      <div className="col-start-5 col-end-9 row-start-3 flex flex-col gap-3">
        <label className="text-black">
          How much time do you want to keep your funds locked?
        </label>
        <input
          type="text"
          className="bg-white rounded-xl p-2 text-black outline-0	"
          placeholder="Amount of Years"
        />
        <label className="text-black">
          After how much time should we consider your account inactive?
        </label>
        <input
          type="text"
          className="bg-white rounded-xl p-2 text-black outline-0	"
          placeholder="Amount in months"
        />
        <label className="text-black">
          Which address should receive what porcentage of your funds?
        </label>
        <AddressPercentage />
        <AddressPercentage />
        <AddressPercentage />
        <label className="text-black">
          Start your fund by suscribing your first Ether
        </label>
        <input
          type="text"
          className="bg-white rounded-xl p-2 text-black outline-0	"
          placeholder="Amount"
        />
        <button className="bg-[#FEAEA5] rounded-lg shadow-lg px-4 py-2 text-black text-xl mt-8">
          Next
        </button>
      </div>
    </Layout>
  );
};

export default dashboard;
