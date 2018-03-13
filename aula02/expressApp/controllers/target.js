/* jshint esversion: 6 */
const target_data = require('../data/target-data.json');

exports.get = function() {
    return target_data;
};
exports.put = function() {
    console.log("PUT");
    return 'Not implemented';
};
exports.post = function() {
    console.log("POST");
    return 'Not implemented';
};
exports.delete = function() {
    console.log("DELETE");
    return 'Not implemented';
};