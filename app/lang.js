"use strict";
function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
}
exports.isPromise = isPromise;
function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
exports.isJsObject = isJsObject;
//# sourceMappingURL=lang.js.map