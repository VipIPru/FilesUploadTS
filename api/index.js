"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var app = (0, express_1)();
var port = 8000;
app.use((0, cors_1)());
app.use(body_parser_1.urlencoded({ extended: false }));
app.use(body_parser_1.json());
app.post("/api/uploadFile/", function (req, res) {
    var allFiles = req.body;
    console.log(allFiles);
    res.send("File uploaded successfully");
});
app.listen(port, function () {
    console.log(`Server started successfully on port ${port}`);
});
