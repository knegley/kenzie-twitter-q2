import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import "./Messages.css";
import MessageList from "./MessageList";
import { receiveMessages } from "../../../redux";

const MessageBoard = props => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <MessageList />
      <Button onClick={() => dispatch(receiveMessages())}>Refresh Board</Button>
    </React.Fragment>
  );
};

export default MessageBoard;
