import React, { Fragment, useState, useContext } from "react";
import { RunContext } from "../../context/RunContext";
import { Form, Button } from "semantic-ui-react";

function FormExampleWidthField() {
  const [run, setRun] = useContext(RunContext);
  const [gloOptions, setGloOptions] = useState({
    id: 0,
    thresholdType: "percentile",
    thresholdValue: 75
  });
  const [locOptions, setLocOptions] = useState({
    id: 0,
    moreThanTwoSamples: false,
    thresholdMethod: "mean",
    minimum: 25,
    maximum: 75,
    customLibraryUrl: "string"
  });

  const handleChange = (e, { name, value }) => {
    setRun({ ...run, [name]: value });
    console.log(run);
  };

  const handleSetGlobalOptions = (e, { name, value }) => {
    setGloOptions({ ...gloOptions, [name]: value });
  };

  const handleSetLocalOptions = (e, { name, value }) => {
    setLocOptions({ ...locOptions, [name]: value });
  };

  const handleGlobalOptions = () => {
    setRun({ ...run, globalOptions: gloOptions });
    console.log(run);
  };

  const handleLocalOptions = () => {
    setRun({ ...run, localOptions: locOptions });
    console.log(run);
  };

  return (
    <Form>
      <h1>Configure your analysis</h1>
      <h5>
        Please choose your the options for the definition of gene activity threshold:
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
      {run.geneThreshold === "global" ? (
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
              onChange={handleSetGlobalOptions}
            />
            <Form.Input
              label="Threshold Value"
              name="thresholdValue"
              placeholder="Threshold Value"
              icon={run.globalOptions.thresholdType === "percentile" ? 'percent': ''}
              onChange={handleSetGlobalOptions}
            />
          </Form.Group>
          <Button onClick={handleGlobalOptions}>Set Options</Button>
        </Fragment>
      ) : null}
      {run.geneThreshold === "local" ? (
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
                { key: "mean", text: "Mean", value: "mean" },
                { key: "custom", text: "Custom", value: "custom" }
              ]}
              onChange={handleSetLocalOptions}
            />
          </Form.Group>
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
              onChange={handleSetLocalOptions}
            />
            <Form.Input
              label="Minimum"
              name="minimum"
              placeholder="Percent (0 - 95%)"
              onChange={handleSetLocalOptions}
            />
            <Form.Input
              label="Maximum"
              name="maximum"
              placeholder="Percent (5 - 100%)"
              onChange={handleSetLocalOptions}
            />
          </Form.Group>
          <Button onClick={handleLocalOptions}>Set Options</Button>
        </Fragment>
      ) : null}
    </Form>
  );
}

export default FormExampleWidthField;
