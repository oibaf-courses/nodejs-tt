/* jshint esversion: 6 */
const clients = require('../data/clientes.json');

module.exports = {
    getClient: (id) => {
        return clients[id];
    }
}