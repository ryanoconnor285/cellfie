import React, { Fragment, useState, useContext } from "react";
import EmailInputForm from "./EmailInputForm";
import ParametersForm from "./ParametersForm";
import { FileContext } from "../../context/FileContext";
import { RunContext } from "../../context/RunContext";
import { Menu, Button, Segment } from "semantic-ui-react";
import axios from 'axios';

function RunForm() {
  const [file] = useContext(FileContext)
  const [run] = useContext(RunContext);
  const [uploadedFile, setUploadedFile] = useState({})
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (e, { value }) => setActiveItem(value);

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file)
    formData.append('uid', run.email)
    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      const { fileName, filePath, guid } = res.data;
      setUploadedFile({ fileName, filePath, guid})
      console.log(uploadedFile)
    } catch(err) {
      if(err.response.status === 500) {
        console.log('There was a problem with the server')
      } else {
        console.log(err.response.data.msg);
      }
    }
  }

  return (
    <Fragment>
      <Menu attached="top" tabular>
        <Menu.Item
          name="Basic Info"
          value={0}
          active={activeItem === 0}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Parameters"
          value={1}
          active={activeItem === 1}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="View Jobs"
          value={2}
          active={activeItem === 2}
          onClick={handleItemClick}
        />
      </Menu>

      <Segment style={{ minHeight: 500 }} attached="bottom">
      {uploadedFile.fileName ? <span>File Uploaded!!</span> : null }
      {uploadedFile.guid ? <span>Don't lose this {uploadedFile.guid}</span> : null }
        {activeItem === 0 && <EmailInputForm />}
        {activeItem === 1 && <ParametersForm />}
        {activeItem === 2 && "View Jobs"}
      </Segment>
      <Menu>
        <Button onClick={() => setActiveItem(activeItem - 1)} disabled={activeItem <= 0}>Back</Button>
        <Button onClick={() => setActiveItem(activeItem + 1)} disabled={activeItem >= 2}>Next</Button>
      </Menu>
      <Menu>
        <Button onClick={handleSubmit}>Submit</Button>
      </Menu>
    </Fragment>
  );
}

export default RunForm;
