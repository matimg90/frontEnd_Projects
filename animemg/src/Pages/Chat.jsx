import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Chat({ messages }) {
  const [newMessage, setNewMessage] = useState('');

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      // TODO: send the message
    }
  }

  function handleChange(event) {
    setNewMessage(event.target.value);
  }

  return (
    <>
      <List>
        {messages.map((message) => (
          <ListItem>{message}</ListItem>
        ))}
      </List>
      <TextField
        label="Type your message here"
        variant="filled"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={newMessage}
      />
    </>
  );
}

export default Chat;