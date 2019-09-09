import React, { Fragment, useState, useContext } from "react";
import EmailInputForm from "./EmailInputForm";
import ParametersForm from "./ParametersForm";
import { FileContext } from "../../context/FileContext";
import { UserContext } from "../../context/UserContext";
import { Menu, Button, Segment } from "semantic-ui-react";
import axios from 'axios';

function RunForm() {
  const [file] = useContext(FileContext)
  const [user] = useContext(UserContext);
  const [uploadedFile, setUploadedFile] = useState({})
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (e, { value }) => setActiveItem(value);

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file)
    formData.append('uid', user.email)
    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath})
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
