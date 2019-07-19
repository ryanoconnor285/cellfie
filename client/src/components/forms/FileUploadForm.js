import React, { useState, useContext } from "react";

import Papa from 'papaparse';
import { RunContext } from "../../context/RunContext";
import { Form, Table, Radio, Input } from "semantic-ui-react";

function FileUploadForm() {
  const [run, setRun] = useContext(RunContext);
  const [file, setFile] = useState(null);

  //TODO handle setErrors if user enters an invalid email
  // const [errors, setErrors] = useState({});

  const handleChange = e => {
    setRun({ ...run, [e.target.name]: e.target.value });
  };

  const handleFileSelect = e => {
    Papa.parse(e.target.files[0], {
      complete: function(results) {
        setFile(results);
        console.log(results);
      }
    });
  }

  return (
    <Form error>
      <Form.Field>
        <Form.Input
          type="file"
          width={6}
          onChange={handleFileSelect}
        />
      </Form.Field>
      <h1>Define your samples</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={6}>Sample</Table.HeaderCell>
            <Table.HeaderCell width={1}>Control</Table.HeaderCell>
            <Table.HeaderCell width={5}>Condition Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {file ? file.data[0].map((sample, index) => 
          <Table.Row key={index}>
            <Table.Cell>{sample}</Table.Cell>
            <Table.Cell><Radio toggle/></Table.Cell>
            <Table.Cell><Input fluid name="conditionName" value={run.conditionName ? run.conditionName : ""} placeholder='ToxinA...' 
        onChange={handleChange} /></Table.Cell>
          </Table.Row>
          ) : null}
        </Table.Body>
      </Table>
    </Form>
  );
}

export default FileUploadForm;
