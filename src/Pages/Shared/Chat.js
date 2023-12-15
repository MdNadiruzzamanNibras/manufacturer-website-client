import React from 'react';
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const Chat = () => {
   
    

    return (
      <div>
         <WhatsAppWidget
            message={"Hello! 👋🏼 \n\nWhat can we do for you?"}
            phoneNumber='+8801783014828'
        />
        </div>
    );
};

export default Chat;
