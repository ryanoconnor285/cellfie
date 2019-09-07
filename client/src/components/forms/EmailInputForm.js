import React, { useState, useContext } from "react";

import { UserContext } from "../../context/UserContext";
import { RunContext } from "../../context/RunContext";
import { Form, Message } from "semantic-ui-react";

function EmailInputForm() {
  const [, setUser] = useContext(UserContext);
  const [run, ] = useContext(RunContext);
  const [formData] = useState({
    contact: "",
    name: ""
  });

  //TODO handle setErrors if user enters an invalid email
  const [errors] = useState({});

  const handleChange = e => {
    setUser({ email: formData.email });
    console.log(run)
  };

  return (
    <Form width={6} error>
      <Form.Input
        name="contact"
        value={run.contact ? run.contact : ""}
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

      <Form.Input
        name="name"
        value={run.name ? run.name : ""}
        label="Run Name"
        width={6}
        placeholder="Run Name"
        onChange={handleChange}
      />
      {errors.name ? (
        <Message
          error
          header="Run Name"
          content="You will need this to keep runs organized."
        />
      ) : null}
    </Form>
  );
}

export default EmailInputForm;
