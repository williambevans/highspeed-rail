import React from "react";
import MessageForm from '../components/Message';


function Chat() {
    return (
    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <h1 class="display-4">High-Speed Chat</h1>
            <p class="lead">Leave a detailed message if you or someone you know is being affected by the rail</p>
        </div>
    </div>    
        <MessageForm />
    </div>
    );
}

export default Chat; 