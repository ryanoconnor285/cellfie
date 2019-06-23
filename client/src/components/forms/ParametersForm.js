import React from 'react'
import { Form } from 'semantic-ui-react'

const FormExampleWidthField = () => (
  <Form>
    <h1>Configure your analysis</h1>
    <h5>Please choose your screen type and the library used in your screen</h5>
    <h5>If you wish to edit the default parameter seetings, click "Advanced Options"</h5>
    <h4>Project Parameters</h4>
    <Form.Group>
      <Form.Dropdown label='Screen Type' placeholder='Screen Type' width={8} />
      <Form.Dropdown label='Library' placeholder='Library' option={"Enrichment"} width={8} />
    </Form.Group>
    <Form.Group>
      <Form.Input placeholder='2 Wide' width={2} />
      <Form.Input placeholder='12 Wide' width={12} />
      <Form.Input placeholder='2 Wide' width={2} />
    </Form.Group>
    <Form.Group>
      <Form.Input placeholder='8 Wide' width={8} />
      <Form.Input placeholder='6 Wide' width={6} />
      <Form.Input placeholder='2 Wide' width={2} />
    </Form.Group>
  </Form>
)

export default FormExampleWidthField