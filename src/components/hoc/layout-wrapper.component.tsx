import React from "react";
import { Box } from "@mui/material";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

export default function layoutWrapper<P>(
  WrapperComponent: React.ComponentType<P>
) {
  const withLayout = (props: P) => {
    return (
      <Box>
        <Header />
        <Box className="pb-20 bg-[#F5F5F5]">
          <WrapperComponent {...props} />
        </Box>
        <Footer />
      </Box>
    );
  };
  return withLayout;
}
