import React, { Fragment, useState, useContext } from "react";
import LibraryOptions from "./dropdowns/LibraryOptions";
import { RunContext } from "../../context/RunContext";
import { Form, Button } from "semantic-ui-react";

function FormExampleWidthField() {
  const [run, setRun] = useContext(RunContext);
  const [toggleAdvanced, setToggleAdvanced] = useState(false);

  const screenTypeOptions = [
    { key: "enrichment", text: "Enrichment", value: "enrichment" },
    { key: "depletion", text: "Depletion", value: "depletion" }
  ];

  const handleChange = (e, { value }) => {
    setRun({ ...run, [e.target.name]: value });
    console.log([e.target.name]);
  };

  return (
    <Form>
      <h1>Configure your analysis</h1>
      <h5>
        Please choose your screen type and the library used in your screen
      </h5>
      <h5>
        If you wish to edit the default parameter seetings, click "Advanced
        Options"
      </h5>
      <h4>Project Parameters</h4>
      <Form.Group>
        <Form.Dropdown
          label="Screen Type"
          name="screenType"
          selection
          placeholder="Screen Type"
          options={screenTypeOptions}
          width={4}
          value={run.screenType}
          onChange={handleChange}
        />
        <LibraryOptions setRun={setRun} run={run} />
        {run.library === "customLibrary" ? (
          <Form.Group>
            <Form.Input placeholder="Library" width={2} />
            <Form.Input placeholder="12 Wide" width={12} />
            <Form.Input placeholder="2 Wide" width={2} />
          </Form.Group>
        ) : null}
      </Form.Group>
      <Form.Group>
        <Button onClick={() => setToggleAdvanced(!toggleAdvanced)}>
          Advanced Options
        </Button>
      </Form.Group>
      {toggleAdvanced ? (
        <Fragment>
          <h4>Alignment</h4>
          <Form.Group>
            <Form.Input label="sgRNA Length (bp)" placeholder="sgRNA Length (bp)" width={2} />
            <Form.Input label="Adapter Error Rate" placeholder="Adapter Error Rate" width={2} />
            <Form.Input label="Matching Threshold" placeholder="Matching Threshold" width={2} />
            <Form.Input label="Ambiguity Threshold" placeholder="Ambiguity Threshold" width={2} />
            <Form.Input label="Seed Length" placeholder="Seed Length" width={2} />
            <Form.Dropdown label="Seed Number" placeholder="Seed Number" width={2} />
            <Form.Input label="Interval Function" placeholder="Interval Function" width={2} />
          </Form.Group>

          <h4>Read Counting</h4>
          <Form.Group>
            <Form.Input placeholder="Normalization" width={8} />
            <Form.Input placeholder="Cutoff" width={6} />
            <Form.Input placeholder="Round Counts" width={2} />
            <Form.Input placeholder="Averaging" width={6} />
          </Form.Group>

          <h4>Gene Ranking</h4>
          <Form.Group>
            <Form.Input placeholder="Gene Ranking Metric" width={8} />
            <Form.Input placeholder="Number of permutations" width={6} />
            <Form.Input placeholder="sgRNA p-value Threshold (aRRA only)" width={2} />
            <Form.Input placeholder="% sgRNAs Included (STARS only)" width={6} />
          </Form.Group>

          <h4>Statistical Significance</h4>
          <Form.Group>
            <Form.Input placeholder="Signif. level (sgRNA Ranking)" width={8} />
            <Form.Input placeholder="Signif. Level (Gene Ranking)" width={6} />
            <Form.Input placeholder="p-value Adjustment" width={2} />
            <Form.Input
              placeholder="Signif. Level (Model Selection)"
              width={6}
            />
          </Form.Group>
        </Fragment>
      ) : null}
    </Form>
  );
}

export default FormExampleWidthField;
