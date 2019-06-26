import React, { useState, useEffect } from 'react';


export default function LibraryOptions(props) {
  const {run, setRun} = props
  const [value, setValue] = useState('select')

  useEffect(() => {
    setValue(run.libraryOptions ? run.libraryOptions.value : 'Select')
  });

  const libraryOptions = [
    {
      key: "activityOptimizedHuman",
      text: "Activity-optimized human genome-wide",
      value: "activityOptimizedHuman"
    },
    {
      key: "brieMouseGenome",
      text: "Brie Mouse genome-wide",
      value: "brieMouseGenome"
    },
    {
      key: "brieMouseKinome",
      text: "Brie Mouse Kinome",
      value: "brieMouseKinome"
    },
    {
      key: "brunelloHumanGenomeWide",
      text: "Brunello Human genome-wide",
      value: "brunelloHumanGenomeWide"
    },
    {
      key: "brunelloHumanKinomeG1-4",
      text: "Brunello Human Kinome (guides 1-4)",
      value: "brunelloHumanKinomeG1-4"
    },
    {
      key: "brunelloHumanKinomeG5-8",
      text: "Brunello Human Kinome (guides 5-8)",
      value: "brunelloHumanKinomeG5-8"
    },
    {
      key: "brunelloHumanKinomeG1-8",
      text: "Brunello Human Kinome (guides 1-8)",
      value: "brunelloHumanKinomeG1-8"
    },
    {
      key: "humanGeckov2Full",
      text: "Human GeCKO v2 (Full)",
      value: "humanGeckov2Full"
    },
    {
      key: "humanGeckov2HalfA",
      text: "Human GeCKO v2 (Half_A)",
      value: "humanGeckov2HalfA"
    },
    {
      key: "humanGeckov2HalfB",
      text: "Human GeCKO v2 (Half_B)",
      value: "humanGeckov2HalfB"
    },
    {
      key: "humanGeckov2FullDuplicatesRemoved",
      text: "Human GeCKO v2 (Full, NonTargeting duplicates removed)",
      value: "humanGeckov2FullDuplicatesRemoved"
    },
    {
      key: "humanKnockout",
      text: "Human Improved genome-wide Knockout v1",
      value: "humanKnockout"
    },
    {
      key: "mouseGeckov2Full",
      text: "Mouse GeCKO v2 (Full)",
      value: "mouseGeckov2Full"
    },
    {
      key: "mouseGeckov2HalfA",
      text: "Mouse GeCKO v2 (Half_A)",
      value: "mouseGeckov2HalfA"
    },
    {
      key: "mouseGeckov2HalfB",
      text: "Mouse GeCKO v2 (Half_B)",
      value: "mouseGeckov2HalfB"
    },
    {
      key: "mouseKnockout",
      text: "Mouse Improved genome-wide Knockout v2",
      value: "mouseKnockout"
    },
    {
      key: "oxfordDrosophila",
      text: "Oxford Drosophila genome-wide",
      value: "oxfordDrosophila"
    },
    {
      key: "torontoKnockoutBaseLibrary",
      text: "Toronto Knockout (Base Library)",
      value: "torontoKnockoutBaseLibrary"
    },
    {
      key: "torontoKnockoutBaseAndLibrary",
      text: "Toronto Knockout (Base & Supplemental Library)",
      value: "torontoKnockoutBaseAndLibrary"
    },
    {
      key: "torontoKnockoutSupplementalLibrary",
      text: "Toronto Knockout (Base Supplemental Library)",
      value: "torontoKnockoutSupplementalLibrary"
    },
    {
      key: "customLibrary",
      text: "Upload Custom Library",
      value: "customLibrary"
    }
  ];

  const handleChange = (e) => {
    setRun({ ...run, [e.target.name]: e.target.value });
    console.log(run);
  };

  return (
    <div>
      <select id="libraryOptions" onChange={handleChange} name="libraryOptions" value={value}>
        {libraryOptions.map(option => 
          <option key={option.key} value={option.value}>{option.text}</option>
          )
        }
      </select>
    </div>
  )
}
