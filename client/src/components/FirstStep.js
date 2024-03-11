import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";

export default function FirstStep({firstName,lastName,handleChange,error}) {
 

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={'standard'}
            margin={'normal'}
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            value={firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={'standard'}
            margin={'normal'}
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            value={lastName}
            onChange={handleChange}
          />
        </Grid>

      </Grid>

    </>
  );
}
