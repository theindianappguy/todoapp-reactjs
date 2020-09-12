import React from "react";
import { List, ListItemText, ListItem, Button } from "@material-ui/core";
import db from "./firebase";

function Todo(props) {
  return (
    <List
      className="todo_list"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "0px",
      }}
    >
      <ListItem>
        <ListItemText
          primary={props.text.todo}
          secondary={props.text.inprogress ? "In Progress 🚧" : "Completed ✅"}
        />
      </ListItem>
      <Button
        onClick={(event) =>
          db.db.collection("todos").doc(props.text.id).update({
            inprogress: !props.text.inprogress,
          })
        }
        style={{ fontSize: "12px" }}
      >
        {props.text.inprogress ? "Done" : "UnDone"}
      </Button>
      <Button
        onClick={(event) =>
          db.db.collection("todos").doc(props.text.id).delete()
        }
        style={{ fontSize: "12px" }}
      >
        X
      </Button>
      {/* <li></li> */}
    </List>
  );
}

export default Todo;
