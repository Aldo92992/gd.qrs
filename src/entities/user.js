/**
 * Import own libraries
 */
const http = require('../http/http');
/**
 * Returns the list of all User or the ones filtered by
 * the filter parameter (e.g.: 'id eq 123456-3456-...')
 * @param {String} filter Filter to be applied or nothing
 * @returns {Promise} API request data or an error
 */
exports.list = async (headers = {}, filter = '') => {
    let path = '/user/full';
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};

exports.getById = async (id, headers = {}, filter = '') => {
    let path = '/user/' + id;
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};

exports.edit = async (id, data, headers = {}, filter = '') => {
    let path = '/user/' + id;
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.put(path, data, headers, filter);
    return (dt.data);
};
