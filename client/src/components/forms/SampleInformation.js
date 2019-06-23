import React, { useContext } from "react";

import { RunContext } from "../../context/RunContext";
import { Form, Table, Radio, Input } from "semantic-ui-react";

function FileUploadForm() {
  const [run, setRun] = useContext(RunContext);

  //TODO handle setErrors if user enters an invalid email
  // const [errors, setErrors] = useState({});

  const handleChange = e => {
    setRun({ ...run, [e.target.name]: e.target.value });
  };

  return (
    <Form error>
      <h1>Define your samples</h1>
      <h5>Please enter a name for the condition each represents ( e.g. ToxinA, TimePoint1, TimePoint2, etc.)</h5>
      <h5>Replicates of the smae condition need to have the same name.</h5>
      <h5>Please check which files are control replicates.</h5>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={6}>File Name</Table.HeaderCell>
            <Table.HeaderCell width={1}>Control</Table.HeaderCell>
            <Table.HeaderCell width={5}>Condition Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>File 1</Table.Cell>
            <Table.Cell><Radio toggle/></Table.Cell>
            <Table.Cell><Input fluid name="conditionName" value={run.conditionName ? run.conditionName : ""} placeholder='ToxinA...' 
        onChange={handleChange} /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>File 2</Table.Cell>
            <Table.Cell><Radio toggle/></Table.Cell>
            <Table.Cell><Input fluid name="conditionName" value={run.conditionName ? run.conditionName : ""} placeholder='ToxinA...' onChange={handleChange} /></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Form>
  );
}

export default FileUploadForm;
