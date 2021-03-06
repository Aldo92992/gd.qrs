/**
 * Import own libraries
 */
const http = require('../http/http');
/**
 * Returns the list of all Task Operational records or the ones filtered by
 * the filter parameter (e.g.: 'id eq 123456-3456-...')
 * @param {String} filter Filter to be applied or nothing
 * @returns {Promise} API request data or an error
 */
exports.list = async (headers = {}, filter = '') => {
    let path = '/taskoperational';
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};
/**
 * Returns the list of full info Task Operational records 
 * @returns {Promise} API request data or an error
 */
exports.listFull = async (headers = {}) => {
    let path = '/taskoperational/full';
    let data = await http.get(path, headers);
    return (data.data);
};