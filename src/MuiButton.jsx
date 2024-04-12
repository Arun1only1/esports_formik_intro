import React from "react";
import { Button } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const MuiButton = () => {
  return (
    <div>
      <div>
        <h1>Variant</h1>

        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>
      <div>
        <h1>Color</h1>
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="warning">Warning</Button>
        <Button color="error" variant="outlined">
          Error
        </Button>
      </div>

      <div>
        <h1>Button with Icon and text</h1>

        <Button variant="contained" startIcon={<SendIcon />}>
          Send email
        </Button>

        <Button variant="contained" color="secondary" endIcon={<EditIcon />}>
          Edit User
        </Button>
      </div>

      <div>
        <h1>Icon Button</h1>
        <Button>
          <AirplanemodeActiveIcon />
        </Button>
      </div>
    </div>
  );
};

export default MuiButton;
