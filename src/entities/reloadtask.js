/**
 * Import own libraries
 */
const http = require('../http/http');

/**
 * Returns the list of all applications or the ones filtered by
 * the filter parameter (e.g.: 'id eq 123456-3456-...')
 * @param {String} filter Filter to be applied or nothing
 * @returns {Promise} API request data or an error
 */
exports.list = async (headers = {}, filter = '') => {
    let path = '/reloadtask/full';
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};

exports.getById = async (id, headers = {}, filter = '') => {
    let path = '/reloadtask/' + id;
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};

exports.create = async (data, headers = {}, filter = '') => {
    let path = '/reloadtask/create';
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.post(path, data, headers, filter);
    return (dt.data);
};

exports.edit = async (id, data, headers = {}, filter = '') => {
    let path = '/reloadtask/' + id;
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.put(path, data, headers, filter);
    return (dt.data);
};

exports.delete = async (id, headers = {}, filter = '') => {
    let path = '/reloadtask/' + id;
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.delete(path, headers, filter);
    return (dt.data);
};