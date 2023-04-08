import React, { useContext, useState } from 'react'
import { AuthContext, AuthContextProvider } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Timestamp, arrayUnion, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { v4 as uuid} from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  console.log('CURRENT USER: ', currentUser);
  console.log("DATA: " , data);

  const handleSend = async () =>{

    if(img){
      const storageRef = ref(storage, uuid());
      await uploadBytesResumable(storageRef, img).then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              img: downloadURL,
            }),
          });
        });
      });
      
    }else{
      await updateDoc(doc(db, "chats", data.chatId),{
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId:currentUser.uid,
          date: Timestamp.now(),
        })
      });
    }

    console.log('CURRENT USER (otra vez): ', currentUser);

    await updateDoc(doc(db, "UserChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    console.log("updated!!");

    console.log("DATA (otra vez): " , data);
    await updateDoc(doc(db, "UserChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    console.log("updated!!");

    setText("");
    setImg(null);
  };

  return (
    <div className="input">
      <input 
        type="text" 
        placeholder='type something...' 
        onChange={e=>setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <div className="icon">
          <AttachFileIcon/>
        </div>
        
        <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor='file'>
          <div className="icon">
            <AddPhotoAlternateIcon/>
          </div>
          
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input