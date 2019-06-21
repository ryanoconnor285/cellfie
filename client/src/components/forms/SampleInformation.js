import React, { useState, useContext } from "react";

import { UserContext } from "../../context/UserContext";
import { RunContext } from "../../context/RunContext";
import { Button, Form } from "semantic-ui-react";

function FileUploadForm() {
  const [, setUser] = useContext(UserContext);
  const [, setRun] = useContext(RunContext);
  const [formData, setFormData] = useState({
    email: "",
    runName: ""
  });

  //TODO handle setErrors if user enters an invalid email
  // const [errors, setErrors] = useState({});

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
      <h1>Define your samples</h1>
      <h5>Please enter a name for the condition each represents ( e.g. ToxinA, TimePoint1, TimePoint2, etc.)</h5>
      <h5>Replicates of the smae condition need to have the same name.</h5>
      <h5>Please check which files are control replicates.</h5>
      <Form.Field>
        {" "}
        <Button
          content="Choose File"
          labelPosition="left"
          icon="file"
          onClick={handleSubmit}
        />
        <input
          type="file"
          hidden
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  );
}

export default FileUploadForm;
