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
exports.listAll = async (headers = {}, filter = '') => {
    let path = '/license';
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};

exports.listProfessional = async (headers = {}, filter = '') => {
    let path = '/license/professionalaccesstype';
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};

exports.listAnalyzer = async (headers = {}, filter = '') => {
    let path = '/license/analyzeraccesstype';
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};

exports.getAnalyzer = async (headers = {}, id, filter = '') => {
    let path = '/license/analyzeraccesstype/' + id;
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};

exports.createAnalyzer = async (headers = {}, data, filter = '') => {
    let path = '/license/analyzeraccesstype';
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.post(path, data, headers, filter);
    return (dt.data);
};

exports.editAnalyzer = async (headers = {}, id, data, filter = '') => {
    let path = '/license/analyzeraccesstype/' + id;
    if (filter !== '') filter = '&filter=' + filter;
    let dt = await http.put(path, data, headers, filter);
    return (dt.data);
};
