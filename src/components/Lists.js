// ItemList.jsx
import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";

const Lists = (props) => {
  const [completeList, setCompleteList] = useState(null);

  // firestoreから全データを取得してstateに格納する関数
  const getListsFromFirestore = async () => {
    const itemListArray = await firebase
      .firestore()
      .collection("checkin-history")
      .get();
    const completeArray = itemListArray.docs.map((x) => {
      return {
        id: x.id,
        data: x.data(),
      };
    });
    setCompleteList(completeArray);
    return completeArray;
  };

  // useEffectを利用してFirestoreからデータの一覧を取得．
  useEffect(() => {
    const result = getListsFromFirestore();
  }, [props]);

  return (
    <div>
      <ul>
        {completeList?.map((x, index) => (
          <li key={index} id={x.id}>
            <input type="checkbox" value={x.id} />
            <p>name{x.data.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
