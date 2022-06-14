import React, { useEffect, useState, useReducer } from 'react';
import AppTiser from './components/AppTiser';
import './App.scss';

export default function App() {
    const [seconds, setSeconds] = useState(0);
    const [clickStart, setClickStart] = useState(false);
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);

    const url_post = '//jsonplaceholder.typicode.com/posts';
    const url_user = '//jsonplaceholder.typicode.com/users';

    useEffect(() => {
      if (!clickStart) {
        console.log('clickStart', clickStart);
        return () => { return false; }
      }
      
      const timer = setInterval(async () => {
        // const response = await fetch(url_user).then(response => response.json());

        //  fetch and Promise
        const [postRes, userRes] = await Promise.all([
          fetch(url_post),
          fetch(url_user),
        ]);

        const [post, user] = await Promise.all([
          postRes.json(),
          userRes.json(),
        ]);

        setPost(post);   
        setUser(user);
        setSeconds(seconds + 3);
      }, 3000);               

      // clearing interval
      console.log(timer, clickStart);
      return () => clearInterval(timer);
    }, [seconds, clickStart]);

    /* rewrite it all useReducer */
    const handleSubmit = (e) =>  {
      e.preventDefault()
    }

    const handleChange = (e) => {
      // setUserInput(e.currentTarget.value)
    } 

    const handleKeyPress = (e)  => {
      if(e.key === "Enter") {
          handleSubmit(e)
      }
    }  

    console.log(post);
    console.log(user);
    return (
      <>
        <AppTiser seconds={seconds}  />
        <div className="chat_body">
          <button className="chat_button" onClick={()=>setClickStart(!clickStart)}>...</button>
          {clickStart===true &&
            <div className="chat_box">
              <div className="chat_box_header">
                <span>Snail_Chat_v1.0 (seconds: {seconds})</span>
                <button type="button" className="chat_close" onClick={()=>setClickStart(false)}>&#10006;</button>
              </div>
              <div className="chat_box_body">
                <div className="chat_logs">
                  {user.length ? user.map((item, index)=>(
                    <ChatMessage item={item} key={`chat_msg_${index}`} />
                  )) : <div className="chat_loding">Loding...</div>}
                </div>
              </div>
              <form className="chat_box_input" onSubmit={handleSubmit}>
                <input type="text" className="chat-input" placeholder="message..." />
                <button type="submit" className="chat_submit">@</button>
              </form>
            </div>
          }
        </div>
      </>
    );
}

const ChatMessage = ({item}) => {
  return (
    <div  className={`chat_msg ${[1,3,5,7,9].includes(item.id)?'user':'manager'}`}>
      <div className="chat_msg_aga"><span>{item.username}</span></div>
      <div className="chat_msg_text"><span>{item.username} {item.name} {item.phone}</span></div>
    </div>
  )
}