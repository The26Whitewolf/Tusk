import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import FirebaseContext from "../contexts/FirebaseContext";

const AddTask = () => {
  const { store, auth } = useContext(FirebaseContext);
  const history = useHistory();

  const userId = auth.currentUser.uid;
  const taskCollection = store.collection(`users/${userId}/tasks`);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    if (!title) {
      return alert("Please give your task a title");
    }

    await taskCollection.add({
      title,
      date,
      complete: false,
    });

    history.push("/");
  }

  return (
    <Layout title="Add Todo">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            type="text"
            placeholder="Add Day and Time"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </Layout>
  );
};

export default AddTask;
