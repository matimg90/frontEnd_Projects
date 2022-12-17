import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function ChatMessages({ messages }) {
  return (
    <List>
      {messages.map((message) => (
        <ListItem>{message}</ListItem>
      ))}
    </List>
  );
}

export default ChatMessages;