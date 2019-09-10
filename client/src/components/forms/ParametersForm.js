import React, { useContext } from "react";
import FileUploadForm from "./FileUpload";
import GlobalThreshold from "./threshold/GlobalThreshold";
import LocalThreshold from "./threshold/LocalThreshold";
import EmailInput from "./EmailInputForm";
import SubmitForm from "./SubmitForm";
import { RunContext } from "../../context/RunContext";
import { Form } from "semantic-ui-react";

function FormExampleWidthField() {
  const [run, setRun] = useContext(RunContext);

  const handleChange = (e, { name, value }) => {
    setRun({ ...run, [name]: value });
    console.log(run);
  };

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

  return (
    <Form>
      <h1>Configure your analysis</h1>
      <h5>Email address (you will need this to retrieve results)</h5>
      <EmailInput />
      <h5>
        Please choose the options for the definition of gene activity threshold:
      </h5>
      <h3>Reference Model</h3>
      <Form.Dropdown
        label="Reference Model"
        name="referenceModel"
        selection
        placeholder="Reference Model"
        options={referenceModelOptions}
        width={6}
        onChange={handleChange}
      />
      <h3>File Upload</h3>
      <FileUploadForm />
      <h4>Total Samples: {run.totalSamples}</h4>
      <h3>Project Parameters</h3>
      <Form.Group>
        <Form.Dropdown
          label="Gene Threshold"
          name="geneThreshold"
          value={run.geneThreshold ? run.geneThreshold : ""}
          selection
          placeholder="Gene Threshold"
          options={[
            { key: "global", text: "Global", value: "global" },
            { key: "local", text: "Local", value: "local" }
          ]}
          onChange={handleChange}
        />
      </Form.Group>
      {run.geneThreshold === "global" ? <GlobalThreshold /> : null}
      {run.geneThreshold === "local" ? <LocalThreshold /> : null}
      <SubmitForm />
    </Form>
  );
}

export default FormExampleWidthField;
