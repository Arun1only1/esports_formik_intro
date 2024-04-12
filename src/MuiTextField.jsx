import React from "react";
import { TextField } from "@mui/material";

const MuiTextField = () => {
  return (
    <div>
      <TextField
        variant="outlined"
        label="Outlined"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <TextField variant="filled" label="Filled" />
      <TextField variant="standard" label="Standard" />
    </div>
  );
};

export default MuiTextField;
