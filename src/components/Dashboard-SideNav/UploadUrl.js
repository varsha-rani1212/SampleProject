import { uid } from 'uid';
import { set } from 'firebase/database';
import { ref }  from 'firebase/database';
import { db } from '../Firebase';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';


function UploadUrl(){
    const[FirstName, setFirstName] = useState("");
    const[LastName, setLastName] = useState("");
    const[Email, setEmail] = useState("");
    
    const googleData = useSelector((state) => state.userData.googleData);
    const signInUserInfo = useSelector((state) => state.userData.userInfo);
    const flagCheckSignInMethod = useSelector((state) => state.userData.flag);

    const videoUrl = useSelector((state) => state.videoUrl.url);
    const title = useSelector((state) => state.videoUrl.title);
    const date = useSelector((state) => state.videoUrl.date);

    flagCheckSignInMethod === 0 ? setFirstName(signInUserInfo.firstName) : setFirstName(googleData.givenName);
    flagCheckSignInMethod === 0 ? setLastName(signInUserInfo.lastName) : setLastName(googleData.familyName);
    flagCheckSignInMethod === 0 ? setEmail(signInUserInfo.email) : setEmail(googleData.email);

    useEffect(() => {
        const uuid = Email;
        set(ref(db, `/videos/${uuid}`), {
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Title: title,
            Date: date,
            VideosUrl: videoUrl,
          });
    }, []);

    return <div>
        <p>Varsha</p>
    </div>

}

export default UploadUrl;