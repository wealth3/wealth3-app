import React from "react";

const AddressPercentage = () => {
  return (
    <div className="flex gap-8 mb-2">
      <input
        type="text"
        className="bg-white rounded-xl p-2 text-black outline-0	flex-1"
        placeholder="Address or ENS"
      />
      <input
        type="text"
        className="bg-white rounded-xl p-2 text-black outline-0	flex-4"
        placeholder="%"
      />
    </div>
  );
};

export default AddressPercentage;
