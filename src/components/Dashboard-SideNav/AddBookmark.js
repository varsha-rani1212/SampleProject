import styles from "./AddBookmark.module.css";
import { useSelector } from "react-redux";
import React, { useRef, useState, useEffect } from "react";

import { uid } from "uid";
import { set } from "firebase/database";
import { ref as Database_Ref } from "firebase/database";
import { db } from "../Firebase";

function AddBookmark() {
  const videoUrl = useSelector((state) => state.addNotesVideoUrl.url);
  const googleData = useSelector((state) => state.userData.googleData);
  const signInUserInfo = useSelector((state) => state.userData.userInfo);
  const flagCheckSignInMethod = useSelector((state) => state.userData.flag);

  const videoRef = useRef(null);
  const [bookmarks, setBookMarks] = useState([]);
  const [text, setText] = useState("");

  let email;
  if (flagCheckSignInMethod === 0) email = signInUserInfo.email;
  else email = googleData.email;

  useEffect(() => {
    const fetchUserFavouriteVideoData = async () => {
      const response = await fetch(
        "https://loginproject-28b6c-default-rtdb.firebaseio.com/UserVideoNotes.json"
      );
      const responseData = await response.json();
      const tempData = [];

      for (const key in responseData) {
        if (
          email === responseData[key].UserEmail &&
          videoUrl === responseData[key].Url
        ) {
          tempData.push({
            time: responseData[key].time,
            text: responseData[key].note,
          });
        }
      }
      setBookMarks(tempData);
    };
    fetchUserFavouriteVideoData();
  }, []);

  function playPause(event) {
    event.preventDefault();
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  function addBookMarks(event) {
    playPause(event);
    const marker = {
      time: videoRef.current.currentTime,
      text,
    };
    if (text.length > 0) {
      setBookMarks([...bookmarks, marker]);

      const uuid = uid();
      set(Database_Ref(db, `/UserVideoNotes/${uuid}`), {
        id: uuid,
        Url: videoUrl,
        note: text,
        time: videoRef.current.currentTime,
        UserEmail: email,
      });

      setText("");
    }
  }

  function gotoMarker(time) {
    videoRef.current.currentTime = time;
    videoRef.current.play();
  }

  return (
    <>
      <div className={styles.Display}>
        <div className={styles.container}>
          <div className={styles.writeNotes}>
            <label>Add your Notes: </label>
            <textarea
              input="text"
              rows="20"
              cols="35"
              placeholder="Enter bookmark text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" onClick={addBookMarks}>
              Add
            </button>
          </div>
          <div className={styles.videoArea}>
            <video
              src={videoUrl}
              width="600"
              height="380"
              ref={videoRef}
              onClick={playPause}
              controls
              controlsList="nodownload nofullscreen "
              disablePictureInPicture
            />
          </div>
        </div>

        <div className={styles.showBookmark}>
          {bookmarks.length > 0 ? (
            <ul>
              {bookmarks.map((mark) => (
                <li
                  key={mark.time}
                  onClick={() => gotoMarker(mark.time)}
                  className={styles.videoNotesDisplay}
                >
                  <label>Note: </label>
                  {mark.text} | <label> Time:</label> {mark.time}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default AddBookmark;
