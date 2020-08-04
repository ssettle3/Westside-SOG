import React from "react";
import TextField from "@material-ui/core/TextField";

export const Input = ({ placeholder, value, label, onChange }) => (
  <TextField
    style={{ padding: 5 }}
    placeholder={placeholder}
    value={value}
    helperText={label}
    onChange={(e) => onChange(e.target.value)}
  />
);
