import React, { useState, useContext } from "react";

import { UserContext } from "../../context/UserContext";
import { RunContext } from "../../context/RunContext";
import { Form, Message } from "semantic-ui-react";

function EmailInputForm() {
  const [, setUser] = useContext(UserContext);
  const [run, setRun] = useContext(RunContext);
  const [formData] = useState({
    email: "",
    runName: ""
  });

  const referenceModelOptions = [
    {
      key: "human_Recon2_2",
      text: "Human (Recon2.2)",
      value: "human_Recon2_2"
    },
    { key: "human_Recon2", text: "Human (Recon2)", value: "human_Recon2" },
    { key: "human_Recon1", text: "Human (Recon1)", value: "human_Recon1" },
    { key: "human_ihsa", text: "Human (iHsa)", value: "human_ihsa" },
    { key: "human_quek14", text: "Human (quek14)", value: "human_quek14" },
    { key: "rat_irno", text: "Rat (iRno)", value: "rat_irno" },
    { key: "mouse_imm1415", text: "Mouse (iMM1415)", value: "mouse_imm1415" },
    { key: "cho_icho_v1", text: "CHO (iCHOv1)", value: "cho_icho_v1" }
  ];

  //TODO handle setErrors if user enters an invalid email
  const [errors] = useState({});

  const handleChange = e => {
    setRun({ ...run, [e.target.name]: e.target.value });
    setUser({ email: formData.email });
    console.log(run)
  };

  const handleDropdownChange = (e, { name, value}) => {
    setRun({ ...run, [name]: value });
    console.log(run)
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
        placeholder="Run Name"
        onChange={handleChange}
      />
      {errors.runName ? (
        <Message
          error
          header="Run Name"
          content="You will need this to keep runs organized."
        />
      ) : null}
      <Form.Dropdown
        label="Reference Model"
        name="referenceModel"
        selection
        placeholder="Reference Model"
        options={referenceModelOptions}
        width={4}
        onChange={handleDropdownChange}
      />
    </Form>
  );
}

export default EmailInputForm;
