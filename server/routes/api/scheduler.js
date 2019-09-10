const express = require('express');
const router = express.Router();


// @route   GET scheduler/test
// @desc    Tests scheduler route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Scheduler Works' }));


router.post("/scheduler", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  // File ID with User ID and Unique Global ID (uniqid)
  const guid = uniqid();
  const uid = "kimberly..email.com";
  const fid = `/var/sysbio/cellfie/local/data/${uid}/${guid}/${file}`;
});

module.exports = router;