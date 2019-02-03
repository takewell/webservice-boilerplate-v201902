import { db } from "./firebase";

// User API
export const doCreateUser = (id: string, username: string, email: string) =>
  db.collection("users").add({
    email,
    username
  });
export const onceGetUsers = async () => {
  const querySnapshot = await db.collection("users").get();
  const users = querySnapshot.docs;
  return users.map(user => {
    return user.data();
  });
};
