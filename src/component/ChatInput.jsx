import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { doc, serverTimestamp } from 'firebase/firestore';
import { Avatar } from 'react-daisyui';

const ChatInput = () => {
    const [text, setText] = useState("");
    const {currentUser} = UserAuth();

    const {displayName, PhotoUrl, Uid, name} = currentUser;
    const getText = (e) => {
       console.log( "the text is " +  e.target.value )
    }
    const handlesend = async (e) => {
        if(e.trim == ''){
            alert('no vex me o, type message')
        }
        // send to firebase
        try {
            await setDoc(collection(db, "messages"), {
                text:text,  avatar:PhotoUrl, name:displayName, time:serverTimestamp(), Uid
            });
        } catch (error) {
            console.log( "the error is " +error)
        }
    }
  return (
    <div className='bg-amber-300 fixed bottom-0 w-full py-10 shadow-lg'>
      <form className='px-2 container flex'>
        <input id='inputtext' onChange={getText} className='input focus:outline-none w-full bg-amber-200 rounded-full' type='text' placeholder='Send messages..'/>
        <button onClick={handlesend} className='w-auto bg-amber-700 text-white rounded-r-lg text-lg px-5'>Send</button>
      </form>
    </div>
  )
}

export default ChatInput
