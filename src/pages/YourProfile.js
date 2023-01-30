import React, { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";
import { v4 as uuidv4, v4 } from "uuid";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function YourProfile({ setprofileComp }) {
  const [usernames, setusernames] = useState([]);
  const [imgsource, setimgsource] = useState("");
  const [docId, setdocId] = useState("");

  const renderChat = () => {
    setprofileComp(false);
  };

  useEffect(() => {
    db.collection("users")
      .where("uidu", "==", auth.currentUser.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setimgsource(doc.data().profileULR);
          setdocId(doc.id);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  });

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];

    if (file == null) return;
    else {
      const storage = getStorage();
      const fileref = ref(storage, `/images/${uuidv4()}`);
      const upload = await uploadBytes(fileref, file);

      getDownloadURL(fileref).then((url) => {
        const docref = doc(db, "users", docId);
        updateDoc(docref, {
          profileULR: url,
        });
      });
    }
  };

  return (
    <div className="MainContainer">
      <div className="LoginContainer">
        <center>
          <p>Change Profile Picture</p>
        </center>
        <div className="ProfilePictureContainer">
          <img className="CurrentUserProfilePicture" src={imgsource}></img>
        </div>
        <div className="ChangeProfilePicFormContainer">
          <input
            type="file"
            className="UploadProfilePic"
            onChange={handleProfilePicChange}
            multiple
          ></input>
        </div>
        <div className="ReturnContainer">
          <center>
            <h3 onClick={renderChat} className="Return">
              Return to chat
            </h3>
          </center>
        </div>
      </div>
    </div>
  );
}

export default YourProfile;
