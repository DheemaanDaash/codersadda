import React, { useState } from 'react';
import './RoomChat.css';
const RoomChat = () => {
    const [message,setMessage] = useState("");
    const [list,setList] = useState([]);
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        console.log(message);
        const data =  {message}
        if(message){
            setList((localStorage)=>[...localStorage,data])
            setMessage("")
        }

    }
    return (
        <div>
          <div className="chat">
            <h5>Send Message To Everyone</h5>
            <div >
           <form className="message" onSubmit={handleOnSubmit}>
           <input name="message" onChange={(e)=>setMessage(e.target.value)} value={message} className="imputmsg" placeholder="Send Message"/>
            <button className="msgbtn">Send</button>
           </form>
           {
            list.map((a)=>
            
            <div className="reply-box">
                <h6 className="mesgchat">{a.message}</h6>
            </div>
            )
           }
            </div>
          </div>
        </div>
    );
};

export default RoomChat;