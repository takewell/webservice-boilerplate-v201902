import { db } from "./firebase";

// User API
export const doCreateUser = (id: string, username: string, email: string) =>
  db.collection("users").add({
    email,
    username
  });
export const onceGetUsers = () => db.collection("users").get();
