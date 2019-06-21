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
      {" "}
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
