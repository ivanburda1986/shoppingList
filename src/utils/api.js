import firebase from "firebase";
import database from "./firebase";

export async function receiveServerItems() {
  const response = await firebase
    .database()
    .ref("/shoppinglist")
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
}
