import React, { useContext } from "react";
import GlobalThreshold from "./threshold/GlobalThreshold";
import LocalThreshold from "./threshold/LocalThreshold";
import { RunContext } from "../../context/RunContext";
import { Form } from "semantic-ui-react";

function FormExampleWidthField() {
  const [run, setRun] = useContext(RunContext);

  const handleChange = (e, { name, value }) => {
    setRun({ ...run, [name]: value });
    console.log(run);
  };

  return (
    <Form>
      <h1>Configure your analysis</h1>
      <h5>
        Please choose your the options for the definition of gene activity
        threshold:
      </h5>
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
        <Form.Input
          label="Total Samples"
          name="totalSamples"
          value={run.totalSamples ? run.totalSamples : ""}
          placeholder="Total Samples"
          onChange={handleChange}
        />
      </Form.Group>
      {run.geneThreshold === "global" ? <GlobalThreshold /> : null}
      {run.geneThreshold === "local" ? <LocalThreshold /> : null}
    </Form>
  );
}

export default FormExampleWidthField;
