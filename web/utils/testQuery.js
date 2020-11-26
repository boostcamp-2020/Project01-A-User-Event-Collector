"use strict";
exports.__esModule = true;
var makeOption = function (_query, _target, _type) {
    var _a, _b;
    var limit = _query.limit, filter = _query.filter;
    var optObj = {};
    if (limit) {
        optObj.take = +limit;
    }
    if (filter) {
        if (_type === 'string') {
            optObj.where = (_a = {}, _a[_target] = filter, _a);
        }
        if (_type === 'object') {
            optObj.where = _target;
        }
        if (_type === 'number') {
            optObj.where = (_b = {}, _b[_target] = +filter, _b);
        }
    }
    return optObj;
};
exports["default"] = makeOption;
