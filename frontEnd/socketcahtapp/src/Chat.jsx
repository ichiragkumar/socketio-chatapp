import io from "socket.io-client"

import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import queryString from "query-string"
const Chat = () => {

let socket;
const [name, setNAme] = useState("")
const [room, setroom] = useState("")
const [message, setMessage] = useState("")

const sendMessage = ()=> {
    e.preventDefault()
    if(message){
        socket.emit("new message", message, ()=>{
            setMessage("")
        })
    }
}
const location = useLocation()
const ENDPOINT = "http://localhost:4000"
useEffect(()=>{
        const [name, room ] = queryString.parse(location.search)
        setNAme(name)
        setroom(room)
        socket = io(ENDPOINT)

        socket.emit("joinRoom", {name, room}, (error)=>{
            if(error){
                        console.log("error");
            }
        })
}, [])
  return (
    <div>
            Caht app : {room } : {name}
            <input type="text" placeholder="write your name"
              value={message}
              onKeyPress={(e)=> e.key === "enter"? sendMessage}
               onChange={(e)=>setMessage(e.target.value)}/>
    </div>
  )
}

export default Chat
