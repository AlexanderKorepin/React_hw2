import React, { useState } from'react';

export function MessegesList (){
    const [messages, setMessages] = useState([
        {id: "id1", text: 'message 1', heading: 'heading 1'},
        {id: "id2", text: 'message 2', heading: 'heading 2'},
        {id: "id3", text: 'message 3', heading: 'heading 3'},
    ]);


    return messages.map((message) => 
        <>
            <h2>{message.heading}</h2>
            <div key={message.id}>{message.text}</div>
        </>

    )

};
export default MessegesList;