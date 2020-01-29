import React from "react";
import {
  Card,
  MessageBox,
  InputSubmit,
  useMessages
} from "composable-dashboard";

export default initMessages => {
  const { messages, addMessage } = useMessages();
  const handleSubmit = text => {
    addMessage(text);
  };
  return (
    <Card title="Student's Parent">
      <MessageBox messages={messages} />
      <InputSubmit handleSubmit={handleSubmit} />
    </Card>
  );
};
