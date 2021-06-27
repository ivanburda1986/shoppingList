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

export async function updateServerItem(newData) {
  console.log("Hello from the updateServerItem function");
  const response = await firebase
    .database()
    .ref(`/shoppinglist/${newData.id}`)
    .update(newData, (error) => {
      if (error) {
        console.log("Updating the items on the server has failed");
        return "ok";
      } else {
        console.log("The item has been updated on the server successfully");
        return "nok";
      }
    });
  return response;
}
