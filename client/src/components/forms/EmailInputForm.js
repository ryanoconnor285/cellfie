import React, { useState, useContext } from "react";
import { RunContext } from "../../context/RunContext";
import { Form, Message } from "semantic-ui-react";

function EmailInputForm() {
  const [run, setRun] = useContext(RunContext);

  //TODO handle setErrors if run enters an invalid email
  const [errors] = useState({});

  const handleChange = e => {
    setRun({...run, [e.target.name]: e.target.value });
    console.log(run);
  };

  return (
    <>
      <Form.Input
        name="email"
        value={run.email}
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
