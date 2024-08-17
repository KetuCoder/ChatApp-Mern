import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-1 h-[8vh]  bg-gray-800">
        <div className=" w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type Here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{width:"1400px",marginInlineStart:"50px"}}
            className="border border-gray-700 text-black rounded-xl outline-none mt-4 ml-10 px-4 py-3 w-full" 
          />
        </div>
        <button>
          <IoSend className="text-3xl mr-16" style={{marginInlineStart:"308px",fontSize:"40px"}} />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
