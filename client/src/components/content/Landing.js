import React from "react";

import { Grid } from 'semantic-ui-react'
import RunForm from "../forms/RunForm";

const Landing = () => {
  return (
    <Grid centered columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <RunForm />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Landing;
