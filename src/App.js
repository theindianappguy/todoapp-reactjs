import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, TextField } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // code here.... fires when the app.js loads
    db.db
      .collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            inprogress: doc.data().inprogress,
          }))
        );
      });
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    if (input) {
      event.preventDefault();
      //console.log("👽", "Im working!!");
      db.db.collection("todos").add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        inprogress: true,
      });

      //setTodos([...todos, input]);
      setInput("");
    }
  };

  const [input, setInput] = useState("");

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{}}>
        <h1 style={{ marginTop: "50px" }}>
          <a
            href="https://github.com/theindianappguy"
            style={{ textDecoration: "none" }}
          >
            Sanskar Tiwari
          </a>{" "}
          Todos App! 🚀
        </h1>
        <form>
          <TextField
            value={input}
            onChange={(event) => setInput(event.target.value)}
            id="standard-basic"
            label="Write a Todo"
            style={{ width: "90%" }}
          />
          {/* <button></button> */}
          <Button
            type="submit"
            onClick={addTodo}
            variant="contained"
            color="primary"
            disableElevation
            style={{ display: "none" }}
          >
            Add Todo
          </Button>
        </form>
      </div>
      <div
        style={{
          width: "90%",
          marginTop: "50px",
          marginBottom: "100px",
          maxWidth: "750px",
        }}
      >
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
