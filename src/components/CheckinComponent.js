import React, { useCallback, useRef, useState } from "react";
import firebase from "../utils/firebase";
import QrReader from 'react-qr-reader';
import Button from '@material-ui/core/Button';

export default function CheckinComponent() {
  const [result, setResult] = useState('No result');
  const handleScan = data => {
    if (data) {
      setResult(data)
      parseData = JSON.parse(data)
      firebase.firestore().collection('test').add({id: 'testid', name: 'test'})
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
  }
  const handleError = err => {
    console.error(err)
  }
  return(
    <>
      <h1>test</h1>
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{result}</p>
      </div>
      <Button variant="contained" color="default" size="large" href="/">
        ホームに戻る
      </Button>
    </>
  )
};
