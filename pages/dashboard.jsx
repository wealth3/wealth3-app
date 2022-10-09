import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Input, TextField } from "@mui/material";
import AddressPercentage from "../components/AddressPercentage";
import { useSigner } from "wagmi";

import abi from "../utils/abi.json";
import { ethers } from "ethers";

const Dashboard = () => {
  const [data, setData] = useState({
    yearsAmount: 0,
    inactiveTime: 0,
    recipients: [],
    recipientsPercentage: [],
    amount: 0,
  });

  const { data: signer, isError, isLoading } = useSigner();

  console.log(signer);

  const callContract = async () => {
    const contract = new ethers.Contract(
      "0xf822bc4ed9616f05ad44fdea53deeaaa2b7b02b7",
      abi,
      signer
    );

    console.log(contract);

    const tx = await contract.createVault(
      data.yearsAmount * 365 * 24 * 60 * 60,
      data.inactiveTime * 30 * 24 * 60 * 60,
      data.recipients,
      data.recipientsPercentage,
      { value: ethers.utils.parseEther(String(data.amount)) }
    );

    const txre = tx.wait();
    console.log("la respuesta de la transaction es ---->>> ", txre);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Layout>
      <div className="col-start-5 col-end-9 row-start-3 flex flex-col gap-3">
        <label className="text-black">
          How much time do you want to keep your funds locked?
        </label>
        <input
          type="number"
          className="bg-white rounded-xl p-2 text-black outline-0	"
          placeholder="Amount of Years"
          onChange={(e) =>
            setData({
              ...data,
              yearsAmount: Number(e.target.value),
            })
          }
        />
        <label className="text-black">
          After how much time should we consider your account inactive?
        </label>
        <input
          type="number"
          className="bg-white rounded-xl p-2 text-black outline-0	"
          placeholder="Amount in months"
          onChange={(e) =>
            setData({
              ...data,
              inactiveTime: Number(e.target.value),
            })
          }
        />
        <label className="text-black">
          Which address should receive what porcentage of your funds?
        </label>
        <div>
          {[0, 1, 2].map((i) => {
            return (
              <AddressPercentage
                key={i}
                indi={i}
                setAddress={(e, i) => {
                  let recipients = data.recipients;
                  recipients[i] = e;

                  setData({
                    ...data,
                    recipients: recipients,
                  });
                }}
                setAddressPercentage={(e, i) => {
                  let recipientsPercentage = data.recipientsPercentage;
                  recipientsPercentage[i] = e;

                  setData({
                    ...data,
                    recipientsPercentage: recipientsPercentage,
                  });
                }}
              />
            );
          })}
        </div>
        <label className="text-black">
          Start your fund by suscribing your first Ether
        </label>
        <input
          type="number"
          className="bg-white rounded-xl p-2 text-black outline-0	"
          placeholder="Amount"
          onChange={(e) =>
            setData({
              ...data,
              amount: Number(e.target.value),
            })
          }
        />
        <button
          onClick={() => callContract()}
          className="bg-[#FEAEA5] rounded-lg shadow-lg px-4 py-2 text-black text-xl mt-8"
        >
          Next
        </button>
      </div>
    </Layout>
  );
};

export default Dashboard;

// contract.createVault(data.yearsAmount * 365 * 24 * 60 * 60, data.inactiveTime * 30 * 24 * 60 * 60, data.recipients, data.recipientsPercentage)
