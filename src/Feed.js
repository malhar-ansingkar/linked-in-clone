import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import { db } from "./firebase";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
    const [posts,setPosts] = useState([]);
    const [ input ,setInput ]=useState('');
    useEffect(()=>{
        db.collection("posts").onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc =>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name:user.displayName,
            description:user.email,
            messege:input,
            photoUrl:user.photoUrl||"",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        });
        db.collection('posts').orderBy('timestamp')
        setInput("");
    }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form >
            <input value={input} onChange={ (e)=>{ setInput(e.target.value)} } type="text" />
            <button onClick={sendPost} type= "submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption title="Photo" Icon={Image} color="#70B5F9"  />
            <InputOption title="Video" Icon={Subscriptions} color="#e7a33e"  />
            <InputOption title="Event" Icon={EventNote} color="#c0cbcd"  />
            <InputOption title="Article" Icon={CalendarViewDay} color="#7fc15e"  />
        </div>
      </div>

      {/*posts */}
      <FlipMove>
      {posts.map(({id,data:{name , description, messege,photoUrl}})=>(
          <Post 
              key={id} 
              name={name}
              description={description}
              messege={messege}
              photoUrl={photoUrl}
          />
      ))}
      </FlipMove>
      
        
    </div>
  );
}

export default Feed;
