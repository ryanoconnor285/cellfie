import React, { useContext } from "react";
import Papa from 'papaparse';
import { RunContext } from "../../context/RunContext";
import { FileContext } from "../../context/FileContext";
import { Form } from "semantic-ui-react";

function FileUploadForm() {
  const [run, setRun] = useContext(RunContext);
  const [file, setFile] = useContext(FileContext);

  const handleFileSelect = e => {
    setFile(e.target.files[0]);

    Papa.parse(e.target.files[0], {
      complete: function(results) {
        console.log(results);
        setRun({ ...run, totalSamples: results.data[0].length-1, file:file });
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
