import React from "react";
import { Icon } from "semantic-ui-react";

const InfoPage = () => {
  return (
    <div>
      <Icon name="sliders horizontal" size="huge" />
      <h2>Set Parameters</h2>
      <br />
      <Icon name="upload" size="huge" />
      <h2>Upload Samples</h2>
      <br />
      <Icon name="stopwatch" size="huge" />
      <h2>We'll let you know when the results are in</h2>
      <br />
      <Icon name="chart pie" size="huge" />
      <h2>Get results with visualizations</h2>
      <br />
    </div>
  );
};

export default InfoPage;
