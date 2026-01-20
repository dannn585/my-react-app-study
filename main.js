"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parts_1 = require("./parts");
var investmentlist = [
    {
        name: "A",
        value: 200,
        risklevel: "low"
    },
    {
        name: "B",
        value: 300,
        risklevel: "high"
    }
];
var total = (0, parts_1.calculateTotal)(investmentlist);
console.log("\u73FE\u5728\u306E\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u5408\u8A08\u984D\u306F\u3001".concat(total, "\u5186\u3067\u3059\u3002"));
var lowRiskList = investmentlist.filter(function (data) {
    return data.risklevel === "low";
});
console.log(lowRiskList);
var nameList = investmentlist.map(function (data) {
    return data.name;
});
var valuelist = investmentlist.map(function (data) {
    return data.value;
});
console.log(valuelist);
