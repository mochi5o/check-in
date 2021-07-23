// ItemList.jsx
import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import checkPointLists from '../utils/checkPointLists';
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

  useEffect(() => {
    const result = getListsFromFirestore();
  }, [props]);

  return (
    <div>
      <Grid item xs={12} md={12}>
        {completeList?.map((val) => (
          <List key={val.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={val.data.url} />
              </ListItemAvatar>
              <ListItemText
                primary={val.data.name}
              />
              {val.data.isComplete &&
                <ListItemAvatar>
                  <Avatar>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
              }
              </ListItem>
            </List>
          ))}
        </Grid>
    </div>
  );
};

export default Lists;
