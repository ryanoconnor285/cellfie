import React, { Fragment, useContext } from "react";
import { RunContext } from "../../context/RunContext";
import { Form } from "semantic-ui-react";

function FormExampleWidthField() {
  const [run, setRun] = useContext(RunContext);

  const geneThresholdOptions = [
    { key: "global", text: "Global", value: "global" },
    { key: "local", text: "Local", value: "local" }
  ];

  const handleChange = e => {
    setRun({ ...run, [e.target.name]: e.target.value });
    console.log([e.target.name]);
  };

  const handleDropdownChange = (e, { name, value}) => {
    setRun({ ...run, [name]: value });
    console.log(run)
  };

  return (
    <Form>
      <h1>Configure your analysis</h1>
      <h5>
        Please choose your the options for the definition of gene activity threshold:
      </h5>
      <h4>Project Parameters</h4>
      <Form.Group>
        <Form.Dropdown
          label="Gene Threshold"
          name="geneThreshold"
          selection
          placeholder="Gene Threshold"
          options={geneThresholdOptions}
          width={4}
          onChange={handleDropdownChange}
        />
        <Form.Input 
          label="Total Samples"
          name="totalSamples"
          placeholder="Total Samples" 
          width={2} 
          onChange={handleChange}
        />
      </Form.Group>
      {run.geneThreshold === 'global' ? (
        <Fragment>
          <h4>Global Threshold Options</h4>
          <Form.Group>
            <Form.Input label="sgRNA Length (bp)" placeholder="sgRNA Length (bp)" width={2} />
          </Form.Group>
        </Fragment>
      ) : null}
      {run.geneThreshold === 'local' ? (
        <Fragment>
          <h4>Local Threshold Options</h4>
          <Form.Group>
            <Form.Input label="sgRNA Length (bp)" placeholder="sgRNA Length (bp)" width={2} />
          </Form.Group>
        </Fragment>
      ) : null}
    </Form>
  );
}

export default FormExampleWidthField;
