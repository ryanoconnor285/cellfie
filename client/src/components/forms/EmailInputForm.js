import React, { useState, useContext } from "react";

import { UserContext } from "../../context/UserContext";
import { RunContext } from "../../context/RunContext";
import { Button, Form, Message } from "semantic-ui-react";

function EmailInputForm() {
  const [, setUser] = useContext(UserContext);
  const [, setRun] = useContext(RunContext);
  const [formData, setFormData] = useState({
    email: "",
    runName: ""
  });

  //TODO handle setErrors if user enters an invalid email
  const [errors,] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUser({ email: formData.email });
    setRun({ name: formData.runName });
  };

  return (
    <Form error>
      <Form.Input
        name="email"
        label="Email"
        placeholder="joe@email.com"
        onChange={handleChange}
      />
      {errors.email ? (
        <Message
          error
          header="Email Required"
          content="Your email will be used to find your data later."
        />
      ) : null}

      <Form.Input
        name="runName"
        label="Run Name"
        placeholder="rat samples"
        onChange={handleChange}
      />
      {errors.runName ? (
        <Message
          error
          header="Run Name"
          content="You will need this to keep runs organized."
        />
      ) : null}
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

export default EmailInputForm;
