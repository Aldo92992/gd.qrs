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
    let path = '/app/full';
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};

exports.getById = async (id, headers = {}, filter = '') => {
    let path = '/app/' + id;
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};

exports.create = async (data, headers = {}, filter = '') => {
    let path = '/app';
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.post(path, data, headers, filter);
    return (dt.data);
};

exports.edit = async (id, data, headers = {}, filter = '') => {
    let path = '/app/' + id;
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.put(path, data, headers, filter);
    return (dt.data);
};

exports.delete = async (id, headers = {}, filter = '') => {
    let path = '/app/' + id;
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.delete(path, headers, filter);
    return (dt.data);
};

exports.copy = async (id, name, headers = {}, filter = '') => {
    let path = '/app/' + id + '/copy?name=' + name;
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.post(path, headers, filter);
    return (dt.data);
};

exports.publish = async (id, ids, headers = {}, filter = '') => {
    let path = '/app/' + id + '/publish?stream=' + ids;
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.put(path, headers, filter);
    return (dt.data);
};

exports.reload = async (id, headers = {}, filter = '') => {
    let path = '/app/' + id + '/reload';
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.post(path, headers, filter);
    return (dt.data);
};

exports.replace = async (id, idapp, headers = {}, filter = '') => {
    let path = '/app/' + id + '/replace?app=' + idapp;
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.put(path, headers, filter);
    return (dt.data);
};

/*****************************************************
exports.findByStream = async (strmId, filter = '') => {
    let path = '/app/full';
    filter = 'stream.id eq ' + strmId;
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, filter);
    return (data.data);
};

*****************************************************/