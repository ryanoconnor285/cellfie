const express = require("express");
const router = express.Router();
const request = require("request");

// @route   GET scheduler/test
// @desc    Tests scheduler route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Scheduler Works" }));

// @route   GET scheduler/test
// @desc    Tests scheduler route
// @access  Public
router.post("/", (req, res) => {
  const fid = `${__dirname}/var/sysbio/cellfie/local/data/ryan@email.com/405ope83k0e7t359/in.csv`;

  const model = "MT_recon_2_2_entrez.mat";
  const thresh = "-l";
  const percval = "-v";
  const type = "minmaxmean";
  const low = 25;
  const high = 75;
  var exec = require('child_process').exec;

    var args = "curl -X POST 'http://cellfie2.renci.org:8080/tx-queue/2/scheduler/job' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{\'image\':\'krobasky/cellfiemodels:nooptV1\',\'command\':\'/bin/bash -c './execCellfie.sh -d tmp/in.csv -r\
    ${model} ${thresh} ${percval} -t ${type} --low ${low} --high ${high} >  tmp/output.tsv 2> tmp/err.tsv'\',\'mounts\':[{\'source\':\'${fid}\',\'target\':\'/CellFie/tmp\',\'type\':\'bind\',\'read_only\':false}]}";

    exec('curl ' + args, function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });

  request(
    ``,
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        // writing the response to a file named data.html
        fs.writeFileSync("data.html", body);
      }
    }
  );
  const options = {
    method: "POST",
    url: "http://cellfie2.renci.org:8080/tx-queue/2/scheduler/job",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    body: {},
    json: true
  };
  try {
    request(options);
    console.log("requested");
  } catch (error) {
    console.log(error);
  }
  console.log(res.json());
});

module.exports = router;
