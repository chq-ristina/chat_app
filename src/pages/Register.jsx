import React, { useEffect, useState }from 'react';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage, db} from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const usersCollectionRef = collection(db, 'users');

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async(downloadURL) => {
          try{
            //update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            // await usersCollectionRef.add({
            //   uid: res.user.uid,
            //   displayName,
            //   email,
            //   photoURL: downloadURL,
            // });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "UserChats", res.user.uid), {});
          }catch(err){
            console.log(err);
            setErr(true);
          }
        });
      });
      navigate("/");
    }catch (err){
      setErr(true);
    }
  };

  return (
    <div className='form-container'>
        <div className='form-wrapper'>
            <span className="logo">C's Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'></input>
                <input type="email" placeholder='email'></input>
                <input type="password" placeholder='password'></input>
                <input style={{display: "none"}} type="file" id='file'></input>
                <label htmlFor='file'>
                    <AddPhotoAlternateIcon style={{fontSize: 40}}/>
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register