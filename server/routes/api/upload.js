const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const csv = require('fast-csv');
const upload = multer({ dest: 'tmp/csv/' });

// @route   GET api/upload/test
// @desc    Test route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Upload Works' }));

// @route   POST api/upload
// @desc    Tests upload route
// @access  Public
router.post('/', upload.single('file'), function (req, res) {
  const fileRows = [];

  // open uploaded file
  csv.fromPath(req.file.path)
    .on("data", function (data) {
      fileRows.push(data); // push each row
    })
    .on("end", function () {
      console.log(fileRows)
      fs.unlinkSync(req.file.path);   // remove temp file
      //process "fileRows" and respond
    })
});

module.exports = router;