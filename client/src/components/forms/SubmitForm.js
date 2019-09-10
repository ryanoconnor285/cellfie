import React, { useState, useContext } from 'react'
import { FileContext } from "../../context/FileContext";
import { RunContext } from "../../context/RunContext";
import axios from 'axios';
import { Button } from "semantic-ui-react";

const SubmitForm = () => {
  const [file] = useContext(FileContext)
  const [run] = useContext(RunContext);
  const [uploadedFile, setUploadedFile] = useState({})

  const apiRoot = (process.env.NODE_ENV === 'production') ? '/server/upload' : '/upload'
  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file)
    formData.append('uid', run.email)
    try {
      const res = await axios.post(apiRoot, formData, {
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

  const handleSchedule = async e => {
    e.preventDefault()
    const apiRoot = (process.env.NODE_ENV === 'production') ? '/server/scheduler' : '/scheduler'
    try {
      const res = await axios.post(apiRoot)
      console.log(res.data)
    } catch(err) {
      if(err.response.status === 500) {
        console.log('There was a problem with the server')
      } else {
        console.log(err.response.data.msg);
      }
    }
  }

  return (
    <>
      {uploadedFile.fileName ? <span>File Uploaded!!</span> : null }
      {uploadedFile.guid ? <span>Don't lose this {uploadedFile.guid}</span> : null }
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleSchedule}>Schedule</Button>
    </>
  )
}

export default SubmitForm
