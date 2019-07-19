import React, { Fragment, useState, useContext } from "react";
import { RunContext } from "../../../context/RunContext";
import { Form, Button } from "semantic-ui-react";

function GlobalThreshold() {
  const [run, setRun] = useContext(RunContext);
  const [options, setOptions] = useState({
    id: 0,
    thresholdType: "percentile",
    thresholdValue: 75
  });

  const handleSetOptions = (e, { name, value }) => {
    setOptions({ ...options, [name]: value });
  };

  const handleGlobalOptions = () => {
    setRun({ ...run, globalOptions: options });
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
      <Button onClick={handleGlobalOptions}>Set Options</Button>
    </Fragment>
  );
}

export default GlobalThreshold;
