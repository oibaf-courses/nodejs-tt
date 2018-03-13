/* jshint esversion: 6 */
const target_data = require('../data/target-data.json');

exports.get = function() {
    var strTeam = "",
        i = 0;
    console.log(target_data);
    target_data.forEach(element => {
        strTeam = strTeam + `<li> ${element.nome} (${element.aniversario})</li>`;
    });
    strTeam = "<ul>" + strTeam + "</ul>";
    console.log("GET");
    return strTeam;
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