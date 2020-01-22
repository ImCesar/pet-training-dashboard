import React from 'react';
import { Card, MessageBox, InputSubmit, useMessages, ProfileDetails } from 'composable-dashboard';
import { textToMessage } from '../../utilities/textToMessage';

export default ({ initMessage }) => {
  const { messages, addMessage } = useMessages(initMessage);

  const handleSubmit = (text) => {
    addMessage(textToMessage(text));
  }
  return (
    <Card title="Student's Parent">
      <MessageBox messages={messages} />
      <InputSubmit handleSubmit={handleSubmit} />
    </Card>
  )
}