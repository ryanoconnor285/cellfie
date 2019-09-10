import React, { Fragment, useContext } from "react";
import { RunContext } from "../../../context/RunContext";
import { Form } from "semantic-ui-react";

function GlobalThreshold() {
  const [run, setRun] = useContext(RunContext);

  const handleSetOptions = (e, { name, value }) => {
    setRun({ ...run, globalOptions: {
      ...run.globalOptions,
      [name]: value 
    }});
    console.log(run);
  };

  return (
    <Fragment>
      <h4>Global Threshold Options</h4>
      <Form.Group>
        <Form.Dropdown
          label="Threshold Type"
          name="thresholdType"
          selection
          placeholder="Threshold Type"
          options={[
            { key: "percentile", text: "Percentile", value: "percentile" },
            { key: "value", text: "Value", value: "value" }
          ]}
          onChange={handleSetOptions}
        />
        <Form.Input
          label="Threshold Value"
          name="thresholdValue"
          placeholder="Threshold Value"
          icon={
            run.globalOptions.thresholdType === "percentile" ? "percent" : ""
          }
          onChange={handleSetOptions}
        />
      </Form.Group>
    </Fragment>
  );
}

export default GlobalThreshold;
