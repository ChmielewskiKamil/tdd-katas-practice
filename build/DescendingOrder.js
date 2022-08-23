"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberRearanger = void 0;
var NumberRearanger = /** @class */ (function () {
    function NumberRearanger() {
    }
    NumberRearanger.prototype.orderDescending = function (integer) {
        var numbers = integer.toString().split('');
        numbers.forEach(function (number) {
            parseInt(number);
        });
        var result = numbers.sort().reverse().join();
        return parseInt(result);
    };
    return NumberRearanger;
}());
exports.NumberRearanger = NumberRearanger;
