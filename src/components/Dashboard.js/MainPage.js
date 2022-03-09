import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storage } from '../Firebase';
import { videoUrlActions } from '../../store/videoUrl-slice';
import Header from './Header';
// import { uid } from 'uid';
// import { set } from 'firebase/database';
// import { ref }  from 'firebase/database';
// import { db } from '../Firebase';

function MainPage(){

  const [progress, setProgess] = useState(0);
  const dispatch = useDispatch();

    const googleData = useSelector((state) => state.userData.googleData);
    const normalSignInUserData = useSelector((state) => state.userData.userData);
    // console.log("MainPage googleUserdata:" , googleData);
    // console.log("MainPage normalUserData:", normalSignInUserData);

    function formHandler(event){
      event.preventDefault();
      const file = event.target[0].files[0];

      /*const uuid= uid();
      set(ref(db, `/videos/${uuid}`), {
        name: "Happy",
        title: "gupta",
      })*/

      uploadFiles(file);
    }

    function uploadFiles(file){
      if(!file){
        return;
      }
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100); 
        
        setProgess(prog);
      }, (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          dispatch(videoUrlActions.setUrl(url));
        })
      }
      );
    }
  

    return (
      <div>
        <Header />
         <form onSubmit={formHandler}>
      <br />
       <input type="file"/>&nbsp;
       <button type="submit">Upload</button>

       <h3>Uploaded {progress} %</h3>
    </form>
      </div>
    );
}

export default MainPage;