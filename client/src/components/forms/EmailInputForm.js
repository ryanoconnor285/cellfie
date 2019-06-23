import React, { useState, useContext } from "react";

import { UserContext } from "../../context/UserContext";
import { RunContext } from "../../context/RunContext";
import { Form, Message } from "semantic-ui-react";

function EmailInputForm() {
  const [, setUser] = useContext(UserContext);
  const [run, setRun] = useContext(RunContext);
  const [formData,] = useState({
    email: "",
    runName: ""
  });

  //TODO handle setErrors if user enters an invalid email
  const [errors] = useState({});

  const handleChange = e => {
    setRun({ ...run, [e.target.name]: e.target.value });
    setUser({ email: formData.email });
  };

  return (
    <Form width={6} error>
      <Form.Input
        name="email"
        value={run.email ? run.email : ""}
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
        name="runName"
        value={run.runName ? run.runName : ""}
        label="Run Name"
        width={6}
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
    </Form>
  );
}

export default EmailInputForm;
