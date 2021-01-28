import React, { useContext } from "react";
import Tasks from "../components/Tasks";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Layout from "../components/Layout";
import FirebaseContext from "../contexts/FirebaseContext";

function TaskList() {
  const { store, auth } = useContext(FirebaseContext);

  const userId = auth.currentUser.uid;
  const taskCollection = store.collection(`users/${userId}/tasks`);
  const [tasks, loading, error] = useCollectionData(taskCollection, {
    idField: "id",
  });

  async function deleteTask(taskId) {
    await taskCollection.doc(taskId).delete();
  }

  async function toggleTask(taskId, complete) {
    await taskCollection.doc(taskId).set({ complete }, { merge: true });
  }

  let content;
  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = "An error occurred.";
  } else {
    content = (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    );
  }

  return <Layout title="My Todos">{content}</Layout>;
}

export default TaskList;
