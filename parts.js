"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueList = exports.calculateTotal = void 0;
var calculateTotal = function (list) {
    var total = 0;
    list.forEach(function (data) {
        total = total + data.value;
    });
    return total * 1.1;
};
exports.calculateTotal = calculateTotal;
exports.getValueList = (function (list) {
    return list.map(function (data) {
        return data.value;
    });
});
