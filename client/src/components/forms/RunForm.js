import React, { useState, useContext } from "react";

import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import { Button, Form, Message } from "semantic-ui-react";

function RunForm(){
  const [, setUser] = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    runName: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const 
    const res = await axios
      .post("http://cellfie2.renci.org:8080/cellfie/0.0.3/run", )
  
      if (res) {
        return console.log(res)
      }
      console.log(formData)
  };

  return (
    <Form error>

      <Form.Input name="email" label="Email" placeholder="joe@email.com" onChange={handleChange}/>
      {
        errors.email
        ?
        <Message
          error
          header="Email Required"
          content="Your email will be used to find your data later."
        />
        :
        null
      }

      <Form.Input name="runName" label="Run Name" placeholder="rat samples" onChange={handleChange}/>
      {
        errors.runName
        ?
        <Message
          error
          header="Run Name"
          content="You will need this to keep runs organized."
        />
        :
        null
      }
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

export default RunForm;
