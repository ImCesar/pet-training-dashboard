import React from "react";
import { Message, theme } from "composable-dashboard";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import { MessageContainer } from "./style";

export default ({ deleteComment, restoreComment, children }) => {
  return (
    <Message
      backgroundColor={theme.color.background}
      color={theme.color.accent}
    >
      <MessageContainer>
        {children}

        <UnarchiveIcon
          onClick={restoreComment}
          style={{ opacity: "0.6", fontSize: "20px" }}
        />

        <DeleteForeverIcon
          onClick={deleteComment}
          style={{ opacity: "0.6", fontSize: "20px" }}
        />
      </MessageContainer>
    </Message>
  );
};
