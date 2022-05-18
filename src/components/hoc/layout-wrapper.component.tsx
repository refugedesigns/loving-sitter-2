import React from "react";
import { Box } from "@mui/material";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

export default function layoutWrapper<P>(
  WrapperComponent: React.ComponentType<P>
) {
  const withLayout = (props: P) => {
    return (
      <Box className="min-h-screen flex flex-col bg-[#F5F5F5]">
        <Header />
        <Box className="pb-20  flex-1">
          <WrapperComponent {...props} />
        </Box>
        <Footer />
      </Box>
    );
  };
  return withLayout;
}
