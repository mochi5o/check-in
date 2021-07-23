import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase";
import QrReader from 'react-qr-reader';
import Button from '@material-ui/core/Button';

export default function CheckinComponent() {
  const [result, setResult] = useState('No result');
  const getId = async (id) => {
    console.log('getid')
    const itemListArray = await firebase
      .firestore()
      .collection("checkin-history")
      .get();
    const idArr = await itemListArray.docs.map((x) => {
      let str = ''
      if (x.data().id == id){
        str += x.id;
      }
      return str
    });
    const index = idArr.findIndex(n => n !== '');
    const idString = idArr[index];
    console.log(idString)
    return idString;
  };

  const storeForFirebase = (jsonFromQR) => {
    console.log('test')
    const parseData = JSON.parse(jsonFromQR).id
    // const id = getId(parseData);
    const sId = "SG4ELvLO6YYTNWICFnJr"
    const updateDataOnFirestore = async (parseData) => {
      // const id = await getId(parseData);
      const id = "SG4ELvLO6YYTNWICFnJr"
      const updatedData = await firebase
        .firestore()
        .collection("checkin-history")
        .doc(id)
        .update({
          isComplete: true,
        });
      return;
    };
    updateDataOnFirestore();
  }
  useEffect(() => {
    // console.log(result);
    if(result != 'No result'){
      storeForFirebase(result);
    }
    },
  );
  const handleScan = data => {
    if (data) {
      setResult(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }
  return(
    <>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{result}</p>
      <Button variant="contained" color="default" size="large" href="/">
        ホームに戻る
      </Button>
    </>
  )
};
