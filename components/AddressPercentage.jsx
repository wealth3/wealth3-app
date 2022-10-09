import React from "react";
import { FormControl, Input, InputAdornment } from "@mui/material";

const AddressPercentage = () => {
  return (
    <div className="flex gap-4 mb-2">
      <input
        type="text"
        className="bg-white rounded-xl p-2 text-black outline-0 flex-1"
        placeholder="Address or ENS"
      />
      <FormControl sx={{ background: "white", borderRadius: 1 }}>
        <Input
          onChange={(e) => console.log(e)}
          startAdornment={<InputAdornment position="start">%</InputAdornment>}
          disableUnderline
          type="number"
        />
      </FormControl>
    </div>
  );
};

export default AddressPercentage;
