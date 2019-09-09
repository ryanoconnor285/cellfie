import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Form, Message } from "semantic-ui-react";

function EmailInputForm() {
  const [user, setUser] = useContext(UserContext);

  //TODO handle setErrors if user enters an invalid email
  const [errors] = useState({});

  const handleChange = e => {
    setUser({ [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <>
      <Form.Input
        name="email"
        value={user.email}
        label="Email"
        width={6}
        placeholder="joe@email.com"
        onChange={handleChange}
      />
      {errors.email ? (
        <Message
          error
          header="Invalid Email"
          content="Your email will be used to find your data later."
        />
      ) : null}
    </>
  );
}

export default EmailInputForm;
