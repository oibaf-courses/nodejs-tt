/* jshint esversion: 6 */
var fs = require('fs');
const target_data_filename = __dirname+'/../data/target-data.json';
const target_data = require(target_data_filename);

function saveData() {
    fs.writeFile(target_data_filename, JSON.stringify(target_data), 'utf8', function (err) {
        console.error(err);
    });
}

exports.get = function(id) {
    if (!!id) {
        if (id in target_data) {
            return target_data[id];
        }
        return {};
    }
    return target_data;
};
exports.put = function(data) {
    console.log("PUT");
    target_data.push(data);
    saveData();
    return data;
};
exports.post = function(data) {
    target_data.push(data);
    saveData();
    return data;
};
exports.delete = function(id) {
    if (!!id && id in target_data) {
        let excluido = target_data[id];
        delete target_data[id];
        saveData();
        return excluido;
    }
    return {};
};