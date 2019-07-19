import React, { Fragment, useState, useContext } from "react";
import { RunContext } from "../../../context/RunContext";
import { Form, Button } from "semantic-ui-react";

function LocalThreshold() {
  const [run, setRun] = useContext(RunContext);
  const [options, setOptions] = useState({
    id: 0,
    moreThanTwoSamples: false,
    thresholdMethod: "mean",
    minimum: 25,
    maximum: 75,
    customLibraryUrl: "string"
  });

  const handleSetOptions = (e, { name, value }) => {
    setOptions({ ...options, [name]: value });
  };


  const handleLocalOptions = () => {
    setRun({ ...run, localOptions: options });
    console.log(run);
  };

  return (
    <Fragment>
      <h4>Local Threshold Options</h4>
      <Form.Group>
        <Form.Dropdown
          label="Threshold Method"
          name="thresholdMethod"
          selection
          placeholder="Threshold Method"
          options={[
            { key: "minMaxMean", text: "MinMaxMean", value: "minMaxMean" },
            { key: "mean", text: "Mean", value: "mean" }
          ]}
          onChange={handleSetOptions}
        />
      </Form.Group>
      {options.thresholdMethod === "minMaxMean" ? (
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
          <>
            <Form.Input
              label="Minimum"
              name="minimum"
              placeholder="Percent (0 - 95%)"
              onChange={handleSetOptions}
            />
            <Form.Input
              label="Maximum"
              name="maximum"
              placeholder="Percent (5 - 100%)"
              onChange={handleSetOptions}
            />
          </>
        </Form.Group>
      ) : null}
      <Button onClick={handleLocalOptions}>Set Options</Button>
    </Fragment>
  );
}

export default LocalThreshold;
