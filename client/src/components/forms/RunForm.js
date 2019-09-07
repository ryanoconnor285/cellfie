import React, { Fragment, useState } from "react";
import EmailInputForm from "./EmailInputForm";
import ParametersForm from "./ParametersForm";
import axios from 'axios';
import { Menu, Button, Segment } from "semantic-ui-react";

function RunForm() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (e, { value }) => setActiveItem(value);

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('/api/upload')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
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
