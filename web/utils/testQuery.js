"use strict";
exports.__esModule = true;
var makeOption = function (_query, _target, _type) {
    var _a, _b;
    var limit = _query.limit, filter = _query.filter;
    var obtObj = {};
    if (limit) {
        obtObj.take = +limit;
    }
    if (filter) {
        if (_type === 'string') {
            obtObj.where = (_a = {}, _a[_target] = filter, _a);
        }
        if (_type === 'object') {
            obtObj.where = _target;
        }
        if (_type === 'number') {
            obtObj.where = (_b = {}, _b[_target] = +filter, _b);
        }
    }
    return obtObj;
};
exports["default"] = makeOption;