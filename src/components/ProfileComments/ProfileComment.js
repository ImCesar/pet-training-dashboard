import React from 'react';
import { Message, theme } from 'composable-dashboard';
import ArchiveIcon from '@material-ui/icons/Archive';
import { MessageContainer } from './style';

export default ({ children }) => {
  return (
      <Message 
        backgroundColor={theme.color.background} 
        color={theme.color.accent}
      >
        <MessageContainer>
          {children}
          <ArchiveIcon style={{ opacity: "0.6", fontSize: "20px" }} />
        </MessageContainer>
      </Message>
  );
};
