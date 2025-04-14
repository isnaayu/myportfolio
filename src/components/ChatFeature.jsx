import { ButtonChat } from "./ButtonChat";
import { ChatBot } from "./ChatBot";

export const ChatFeature = () => {
    return (
      <div className="fixed bottom-0 right-0 flex flex-col items-end gap-4 p-5 z-20">
        {/* Chatbot Button */}
       <ChatBot/>
  
        {/* WhatsApp Button */}
        <ButtonChat/>
      </div>
    );
  }
  