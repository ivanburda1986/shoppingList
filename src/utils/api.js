import firebase from "firebase";
import database from "./firebase";

export const receiveServerItems = () => {
  firebase
    .database()
    .ref("/shoppinglist")
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        return console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
