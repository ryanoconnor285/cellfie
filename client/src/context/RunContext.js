import React, { useState, createContext } from "react";

export const RunContext = createContext({});

const defaultRun = {
  "id": 0,
  "email": "",
  "referenceModel": "human_Recon2_2",
  "totalSamples": 0,
  "geneThreshold": "global",
  "globalOptions": {
    "id": 0,
    "thresholdType": "percentile",
    "thresholdValue": 75
  },
  "localOptions": {
    "id": 0,
    "moreThanTwoSamples": false,
    "thresholdMethod": "mean",
    "minimum": 25,
    "maximum": 75,
    "customLibraryUrl": "string"
  },
  "sampleUrl": "string",
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "untried",
  "file": null
}

export const RunProvider = ({ children }) => {
  const [run, setRun] = useState(defaultRun);
  return (
    <RunContext.Provider value={[run, setRun]}>{children}</RunContext.Provider>
  );
};
