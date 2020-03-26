import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import DeleteUser from "./DeleteUser.js";
// import /Users/lorihenderson/assessment-kwitter-project/src/react/components/Messages/DeleteUser.js
import {updateuser} from './UpdateUser.css'

const UpdateUser = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      displayName: "",
      password: ""
    }
  });
  const storedAuthToken =
    JSON.parse(localStorage?.getItem("login"))?.result?.token ?? undefined;

  const storedName =
    JSON.parse(localStorage?.getItem("login"))?.result?.username ?? undefined;

  const usersURL = `https://kwitter-api.herokuapp.com/users/${storedName}`;

  const onSubmit = handleSubmit(async data => {
    reset();
    console.log("updating...");
    try {
      console.log(data);

      const response = await fetch(usersURL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + storedAuthToken
        },
        body: JSON.stringify(data)
      });
      console.log(response.status);
      console.log(response.url);
      console.log(response.ok);
      console.log(await response.json());
    } catch (error) {
      console.error(error.name);
      console.error(error.message);
    }
  });

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <h1>Update Account</h1>

        <TextField
          size="small"
          label="display name"
          name="displayName"
          variant="filled"
          placeholder="Display Name"
          inputRef={register}
        />

<<<<<<< HEAD
        <div />
=======
>>>>>>> ce3e21498408b52ec1f93193e89720c1fd2a8bfd

        <TextField
          name="password"
          type="password"
          label="password"
          placeholder="Password"
          variant="filled"
          inputProps={{ minLength: 5 }}
          inputRef={register}
        />

        <div />

        <Button color="primary" type="submit">
          Update
        </Button>
      </form>
<<<<<<< HEAD
=======
      <DeleteUser />
>>>>>>> ce3e21498408b52ec1f93193e89720c1fd2a8bfd
    </React.Fragment>
  );
};

export default UpdateUser;
