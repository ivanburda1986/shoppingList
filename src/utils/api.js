import firebase from "firebase";
import database from "./firebase";

// Receive server items
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

// Update a server item
export async function updateServerItem(updatedItem) {
  console.log("Hello from the updateServerItem function");
  const response = await firebase
    .database()
    .ref(`/shoppinglist/${updatedItem.id}`)
    .update(updatedItem, (error) => {
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

// Add a server item
export async function addServerItem(newItem) {
  const response = await firebase
    .database()
    .ref("shoppinglist/" + newItem.id)
    .set(newItem, (error) => {
      if (error) {
        console.log("Saving a new item to the server has failed");
      } else {
        console.log("A new item has been saved to the server successfully");
      }
    });
  return response;
}

// Delete a server item
