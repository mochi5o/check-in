// ItemList.jsx
import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import checkPointList from '../utils/checkPointLists'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';

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
      <Grid item xs={12} md={12}>
        {checkPointList.map((val, index) => (
          <List key={index} id={val.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={val.url} />
                </ListItemAvatar>
                <ListItemText
                  primary={val.name}
                />
                <ListItemAvatar>
                  <Avatar>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                </ListItem>
            </List>
          ))}
        </Grid>
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
