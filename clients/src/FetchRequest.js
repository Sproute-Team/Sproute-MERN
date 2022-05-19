import React from 'react'
import { ChatState } from './components/Context/AppContext'
import axios from 'axios'
function FetchRequest() {
    const {LoggedInUser, setLoggedInUser,Orders,setOrders,userToken, setUserToken,MenuItem, setMenuItem} = ChatState();
    
  return (
    <div></div>
  )
}

export default FetchRequest