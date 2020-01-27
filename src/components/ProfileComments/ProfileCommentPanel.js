import React, { useState } from "react";
import { InputSubmit, TabPanel, Button } from "composable-dashboard";
import ProfileComment from "./ProfileComment";
import { AddCommentContainer } from "./style";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export default ({ comments, archivedComments }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const handleAddCommentClick = () => {
    setIsAddingComment(true);
  };

  const addToArchive = comment => () => {
    comments.removeMessage(comment.id);
    archivedComments.addMessage(comment);
  };

  const handleSubmit = text => {
    setIsAddingComment(false);
    const id = Math.random() * 10;
    comments.addMessage({ id: id.toString(), text });
  };

  return (
    <TabPanel forTab="comments">
      {comments.messages.map(message => (
        <ProfileComment key={message.id} addToArchive={addToArchive(message)}>
          {message.text}
        </ProfileComment>
      ))}

      {isAddingComment ? (
        <InputSubmit handleSubmit={handleSubmit} />
      ) : (
        <AddCommentContainer>
          <Button onClick={handleAddCommentClick}>
            <span>Add Comment</span>
            <AddCircleIcon />
          </Button>
        </AddCommentContainer>
      )}
    </TabPanel>
  );
};
