import React from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='type something...'/>
      <div className="send">
        <div className="icon">
          <AttachFileIcon/>
        </div>
        
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor='file'>
          <div className="icon">
            <AddPhotoAlternateIcon/>
          </div>
          
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input