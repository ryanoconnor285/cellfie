import React, { Fragment, useState } from "react";
import EmailInputForm from "./EmailInputForm";
import FileUploadForm from "./FileUploadForm";
import ParametersForm from "./ParametersForm";
import { Menu, Button, Segment } from "semantic-ui-react";

function RunForm() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (e, { value }) => setActiveItem(value);

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
          name="File Uploader"
          value={1}
          active={activeItem === 1}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Library and Parameters"
          value={2}
          active={activeItem === 2}
          onClick={handleItemClick}
        />
      </Menu>

      <Segment attached="bottom">
        {activeItem === 0 && <EmailInputForm />}
        {activeItem === 1 && <FileUploadForm />}
        {activeItem === 2 && <ParametersForm />}
      </Segment>
      <Menu>
        <Button onClick={() => setActiveItem(activeItem - 1)} disabled={activeItem <= 0}>Back</Button>
        <Button onClick={() => setActiveItem(activeItem + 1)} disabled={activeItem >= 2}>Next</Button>
      </Menu>
    </Fragment>
  );
}

export default RunForm;
