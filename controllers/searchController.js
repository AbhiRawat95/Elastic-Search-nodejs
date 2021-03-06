var express = require('express');
var router = express.Router();
var esService = require('../services/esService');
var Q = require('q');



router.get("/search", function (req, res) {
    var termToSearch = req.query.termToSearch;
    var fieldToSearch=req.query.fieldToSearch;
    console.log("termToSearch=" + termToSearch);
    Q(esService.performSearch(fieldToSearch,termToSearch)
    ).then(function (data) {
            res.send("Session: %j", data);
        });
});

module.exports = router;
