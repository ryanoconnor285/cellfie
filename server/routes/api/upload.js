const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const fsExtra = require("fs.extra");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");


router.use(fileUpload());

// @route   GET upload/test
// @desc    Tests upload route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Upload Works" }));

// @route   POST /upload
// @desc    Tests upload route
// @access  Public
router.post("/", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  console.log(file)
  // File ID with User ID and Unique Global ID (uniqid)
  const guid = uniqid();
  // TODO implement json web tokens
  const uid = req.body.uid;
  console.log(uid);
  const fid = `var/sysbio/cellfie/local/data/${uid}/${guid}`;

  fsExtra.mkdirp(`${__dirname}/../../${fid}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    fs.appendFile(`${__dirname}/../../${fid}/in.csv`, file.data, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  })
    // const model = "MT_recon_2_2_entrez.mat";
    // const thresh = "-l";
    // const percval = "-v";
    // const type = "minmaxmean";
    // const low = 25;
    // const high = 75;

    //   request(
    //     `curl -X POST "http://cellfie2.renci.org:8080/tx-queue/2/scheduler/job" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"image\":\"krobasky/cellfiemodels:nooptV1\",\"command\":\"/bin/bash -c './execCellfie.sh -d tmp/in.csv -r\
    // ${model} ${thresh} ${percval} -t ${type} --low ${low} --high ${high} >  tmp/output.tsv 2> tmp/err.tsv'\",\"mounts\":[{\"source\":\"${fid}\",\"target\":\"/CellFie/tmp\",\"type\":\"bind\",\"read_only\":false}]}"|sed 's/\"//g'`,
    //     function(error, response, body) {
    //       if (!error && response.statusCode == 200) {
    //         // writing the response to a file named data.html
    //         fs.writeFileSync("data.html", body);
    //       }
    //     }
    //   );

    console.log(fid);

    res.json({ fileName: file.name, filePath: fid, guid: guid });
});

// @route   GET upload/all
// @desc    Get all uploads
// @access  Public
router.get("/all", (req, res) => {
  const fid = req.body.fid;
  const directoryPath = path.join(
    `${__dirname}/../../var/sysbio/cellfie/local/data/rocsteady888@gmail.com`
  );
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach(function(file) {
      console.log(file);
    });
    res.json(files)
  });
});

module.exports = router;
