import React, { useState, useEffect } from 'react';


export default ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  return (
    <div className="card-shell">
      <div className="card-title">
        Inbox
      </div>

      <div className="card-body">
        <div className="messagebox-container">
          {messages.map(message => (
            <div key={message.id} className="instant-message">
              <p>{message.sentFrom}-{message.timeStamp}</p>
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <div className="input-submit-container">
          <input type="text" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}