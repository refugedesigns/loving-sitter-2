import React from "react";

import { Container, Box } from "@mui/material";
import UserDisplayList from "../../components/messages/user-display-list/user-display-list.component";
import withLayout from "../../components/hoc/layout-wrapper.component";
import MessageBox from "../../components/messages/message-box/message-box.component";
const MessagesPage = () => {
  return (
    <Container className="relative flex h-[85vh] pt-10">
        <UserDisplayList />
        <MessageBox />
    </Container>
  );
};

export default withLayout(MessagesPage);
