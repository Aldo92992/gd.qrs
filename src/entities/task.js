/**
 * Import own libraries
 */
const http = require('../http/http');
/**
 * Returns the list of all Task records or the ones filtered by
 * the filter parameter (e.g.: 'id eq 123456-3456-...')
 * @param {String} filter Filter to be applied or nothing
 * @returns {Promise} API request data or an error
 */
exports.list = async (headers = {}, filter = '') => {
    let path = '/task';
    if (filter !== '') filter = '&filter=' + filter;
    let data = await http.get(path, headers, filter);
    return (data.data);
};
/**
 * Executes the task identified by its id
 * @param {String} id Id of the task
 * @returns {Promise} API request data or an error
 */
exports.start = async (id, headers = {}) => {
    let path = `/task/${id}/start`;
    let data = await http.post(path, headers);
    return (data);
};
/**
 * Returns the list of full info Task records 
 * @returns {Promise} API request data or an error
 */
exports.listFull = async (headers = {}) => {
    let path = '/task/full';
    let data = await http.get(path, headers);
    return (data.data);
};