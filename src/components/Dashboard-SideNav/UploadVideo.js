import { storage } from '../Firebase';
import { videoUrlActions } from '../../store/videoUrl-slice';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './UploadVideo.module.css';
import backgroundImageUpload from '../../images/background.jpeg';

function UploadVideo() {
  const [progress, setProgess] = useState(0);
  const dispatch = useDispatch();

  function formHandler(event) {
    event.preventDefault();
    const file = event.target[0].files[0];
    uploadFiles(file, event);
  }

  function uploadFiles(file, event) {
    if (!file) {
      return;
    }
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgess(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          dispatch(videoUrlActions.setUrl(url));
        });
      }
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.uploadArea}>
        <form onSubmit={formHandler}>
          <br />
          <input type="file" />
          &nbsp;
          <button type="submit">Upload</button>
          <h2>Uploaded {progress} %</h2>
        </form>
      </div>
    </div>
  );
}

export default UploadVideo;
