import React, { useState, useContext } from "react";
import Papa from 'papaparse';
import { RunContext } from "../../context/RunContext";
import { Form } from "semantic-ui-react";

function FileUploadForm() {
  const [run, setRun] = useContext(RunContext);
  const [file, setFile] = useState(null);

  //TODO handle setErrors if user enters an invalid email
  // const [errors, setErrors] = useState({});


  const handleFileSelect = e => {
    Papa.parse(e.target.files[0], {
      complete: function(results) {
        setFile(results);
        console.log(results);
        setRun({ ...run, totalSamples: results.data.length-1 });
      }
    });
  }

  return (
      <Form.Field>
        <Form.Input
          type="file"
          width={6}
          onChange={handleFileSelect}
        />
      </Form.Field>
  );
}

export default FileUploadForm;
