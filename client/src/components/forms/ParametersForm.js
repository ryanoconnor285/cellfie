import React, { useContext } from 'react'
import { RunContext } from "../../context/RunContext";
import { Form, Dropdown } from 'semantic-ui-react'

function FormExampleWidthField() {
  const [run, setRun] = useContext(RunContext);

  const screenTypeOptions = [
    { key: 'enrichment', text: 'Enrichment', value: 'enrichment' },
    { key: 'depletion', text: 'Depletion', value: 'depletion' },
  ]

  const libraryOptions = [
    { key: 'activityOptimizedHuman', text: 'Activity-optimized human genome-wide', value: 'activityOptimizedHuman' },
    { key: 'brieMouseGenome', text: 'Brie Mouse genome-wide', value: 'brieMouseGenome' },
    { key: 'brieMouseKinome', text: 'Brie Mouse Kinome', value: 'brieMouseKinome' },
    { key: 'brunelloHumanGenomeWide', text: 'Brunello Human genome-wide', value: 'brunelloHumanGenomeWide' },
    { key: 'brunelloHumanKinomeG1-4', text: 'Brunello Human Kinome (guides 1-4)', value: 'brunelloHumanKinomeG1-4' },
    { key: 'brunelloHumanKinomeG5-8', text: 'Brunello Human Kinome (guides 5-8)', value: 'brunelloHumanKinomeG5-8' },
    { key: 'brunelloHumanKinomeG1-8', text: 'Brunello Human Kinome (guides 1-8)', value: 'brunelloHumanKinomeG1-8' },
    { key: 'humanGeckov2Full', text: 'Human GeCKO v2 (Full)', value: 'humanGeckov2Full' },
    { key: 'humanGeckov2HalfA', text: 'Human GeCKO v2 (Half_A)', value: 'humanGeckov2HalfA' },
    { key: 'humanGeckov2HalfB', text: 'Human GeCKO v2 (Half_B)', value: 'humanGeckov2HalfB' },
    { key: 'humanGeckov2FullDuplicatesRemoved', text: 'Human GeCKO v2 (Full, NonTargeting duplicates removed)', value: 'humanGeckov2FullDuplicatesRemoved' },
    { key: 'humanKnockout', text: 'Human Improved genome-wide Knockout v1', value: 'humanKnockout' },
    { key: 'mouseGeckov2Full', text: 'Mouse GeCKO v2 (Full)', value: 'mouseGeckov2Full' },
    { key: 'mouseGeckov2HalfA', text: 'Mouse GeCKO v2 (Half_A)', value: 'mouseGeckov2HalfA' },
    { key: 'mouseGeckov2HalfB', text: 'Mouse GeCKO v2 (Half_B)', value: 'mouseGeckov2HalfB' },
    { key: 'mouseKnockout', text: 'Mouse Improved genome-wide Knockout v2', value: 'mouseKnockout' },
    { key: 'oxfordDrosophila', text: 'Oxford Drosophila genome-wide', value: 'oxfordDrosophila' },
    { key: 'torontoKnockoutBaseLibrary', text: 'Toronto Knockout (Base Library)', value: 'torontoKnockoutBaseLibrary' },
    { key: 'torontoKnockoutBaseAndLibrary', text: 'Toronto Knockout (Base & Supplemental Library)', value: 'torontoKnockoutBaseAndLibrary' },
    { key: 'torontoKnockoutSupplementalLibrary', text: 'Toronto Knockout (Base Supplemental Library)', value: 'torontoKnockoutSupplementalLibrary' },
    { key: 'customLibrary', text: 'Upload Custom Library', value: 'customLibrary' },
  ]

  const handleChange = e => {
    setRun({ ...run, [e.target.name]: e.target.value });
  };

  return (
    <Form>
      <h1>Configure your analysis</h1>
      <h5>Please choose your screen type and the library used in your screen</h5>
      <h5>If you wish to edit the default parameter seetings, click "Advanced Options"</h5>
      <h4>Project Parameters</h4>
      <Form.Group>
        <Dropdown label='Screen Type' placeholder='Screen Type' options={screenTypeOptions} width={8} />
        <Dropdown label='Library' name='library' placeholder='Library' options={libraryOptions} width={8} value={run.library} onChange={handleChange}/>
        {run.library === 'customLibrary' ? (

          <Form.Group>
            <Form.Input placeholder='Library' width={2} />
            <Form.Input placeholder='12 Wide' width={12} />
            <Form.Input placeholder='2 Wide' width={2} />
          </Form.Group>
        )
          :
          null
        }
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
}

export default FormExampleWidthField