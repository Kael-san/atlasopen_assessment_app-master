import React, { useRef, useState } from "react";
import { useFirestore } from 'reactfire';
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';

//HINT https://github.com/FirebaseExtended/reactfire
import { useUser, useFirestoreCollectionData } from 'reactfire';
import Logout from './Logout';
import 'firebase/auth'

//HINT
import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from 'react-router-dom';
import {TextField, Button, Grid, Typography} from "@material-ui/core";


const auth = firebase.auth();
const firestore = firebase.firestore();

export default function Chat() {

    // TODO: Display messages from chat and submit messages
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useFirestore(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
    return (<>
        <div>
            <h1>Chat Page</h1>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            <Grid container>
            <Grid md={12}>
            <TextField onChange={(e) => console.log(e.target.value)}/>
            </Grid>
            <Grid md={12}>
            <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
            <Button variant="contained" type="submit" disabled={!formValue}>Submit</Button>
            </form>
            </Grid>
            </Grid>
            <Logout />
        </div>
</>)

}
function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img alt="Dogs" src={photoURL || "https://random.dog/8590d98b-5839-4ec7-9065-e3aa0c2d0763.mp4"} />
      <p>{text}</p>
    </div>
  </>)
}