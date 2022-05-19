import { React,createContext,useState,useContext,useEffect } from 'react'
const ChatContext = createContext();

const ChatProvider = ({children}) =>{
    const [LoggedInUser, setLoggedInUser] = useState([]);
    const [Orders, setOrders] = useState([]);
    const [MenuItem, setMenuItem] = useState([]);
    const [userToken, setUserToken] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('chat-token');
        if(!token) {
        //   navigate('/');
            console.log("No token")
        }
        setUserToken(token);
      },[])
    return <ChatContext.Provider value={{LoggedInUser, setLoggedInUser,Orders,setOrders,userToken, setUserToken,MenuItem, setMenuItem}}>{children}</ChatContext.Provider>
}
export default ChatProvider;
export const ChatState =()=>{
    return useContext(ChatContext);
}