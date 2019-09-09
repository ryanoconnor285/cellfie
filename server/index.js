const express = require("express");
const fileUpload = require("express-fileupload");
const uniqid = require("uniqid");
const fs = require("fs.extra");
const request = require("request");
const port = 5000;
const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  // File ID with User ID and Unique Global ID (uniqid)
  const guid = uniqid();
  // TODO implement json web tokens
  const uid = req.body.uid;
  console.log(uid)
  const fid = `/var/sysbio/cellfie/local/data/${uid}/${guid}`;

  fs.mkdirp(`${__dirname}/${fid}/in.csv`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    const model = "MT_recon_2_2_entrez.mat";
    const thresh = "-l";
    const percval = "-v";
    const type = "minmaxmean";
    const low = 25;
    const high = 75;

    request(
      `curl -X POST "http://cellfie2.renci.org:8080/tx-queue/2/scheduler/job" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"image\":\"krobasky/cellfiemodels:nooptV1\",\"command\":\"/bin/bash -c './execCellfie.sh -d tmp/in.csv -r\
  ${model} ${thresh} ${percval} -t ${type} --low ${low} --high ${high} >  tmp/output.tsv 2> tmp/err.tsv'\",\"mounts\":[{\"source\":\"${fid}\",\"target\":\"/CellFie/tmp\",\"type\":\"bind\",\"read_only\":false}]}"|sed 's/\"//g'`,
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          // writing the response to a file named data.html
          fs.writeFileSync("data.html", body);
        }
      }
    );
    console.log(fid);

    res.json({ fileName: file.name, filePath: fid, guid: guid});
  });
});

app.post("/schedule", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  // File ID with User ID and Unique Global ID (uniqid)
  const guid = uniqid();
  const uid = "kimberly..email.com";
  const fid = `/var/sysbio/cellfie/local/data/${uid}/${guid}/${file}`;
});

app.listen(port, () => console.log(`App listening ${port}`));
