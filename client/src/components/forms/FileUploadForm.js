import React, { useContext } from "react";

import { RunContext } from "../../context/RunContext";
import { Button, Form } from "semantic-ui-react";

function FileUploadForm() {
  const [run, setRun] = useContext(RunContext);

  //TODO handle setErrors if user enters an invalid email
  // const [errors, setErrors] = useState({});

  const handleChange = e => {
    setRun({ ...run, [e.target.name]: e.target.value });
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
