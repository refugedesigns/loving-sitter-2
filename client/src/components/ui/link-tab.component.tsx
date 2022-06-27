import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "@mui/material";

interface LinkTabProps {
  label?: string;
  to: string;
  value?:string;
}

export default function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}
