/**
 * Import npm modules
 */
const fs = require('fs');
const url = require('url');

/**
 * Import own modules
 */
const keys = require('../keys/keys');

/**
 * Configuration store object
 */
var confStore = {
    host: '',
    certFile: '',
    certKeyFile: '',
    xrfKey: '',
    certPassword: '',
    user: '',
    userDirectory: '',
    userId: ''
};

/**
 * Validates and apply the parameters contained in the options object
 * - host: https://yourhost:4242/qrs (for instance)
 * - certFile: Path to your server certificate pem file
 * - certKeyFile: Path to your server key certificate file
 * - xrfKey: 16 chars len key to prevent XRF (can be ommitted to be autogenerated) 
 * @param {Object} options - Object containing the parameters to be applied
 * 
 */


const apply = function(options = {}) {
    //Validate array of options
    //console.log("Cert: ", options.certFile);
    setHost(options.host);
    setCertFile(options.certFile);
    setCertKeyFile(options.certKeyFile);
    setXrfKey(options.xrfKey);
    setUser(options.user);
    setUserDirectory(options.userDirectory);
    setUserId(options.userId);
};
/**
 * Retrieves current configuration values
 * @returns {confStore} Configuration store object
 */
const getConfiguration = () => {
    return confStore;
};

/**
 * Sets the Qlik Server Host option individually
 * @param {String} host Qlik Server host https://yourserver:4242/qrs
 * @throws {Error} When the host is not defined
 * @throws {Error} When the host looks like an invalid URL
 */
const setHost = (host) => {
    if (host === undefined) {
        throw new Error('Host is not defined');
    } else {
        let urlHost = url.parse(host);
        if (urlHost.protocol === null || urlHost.host === null || urlHost.port === null) {
            throw new Error('Host seems to be an invalid URI');
        } else {
            confStore.host = host;
        }
    }
};
/**
 * Retrieves the current configured Qlik Server
 * @returns {String} The configured host
 */
const getHost = () => {
    return confStore.host;
};

/**
 * Sets the Qlik Server Pem certificate location
 * @param {String} certFile Qlik Server Pem certificate file (filepath)
 * @throws {Error} When the cetificate file path is not defined
 * @throws {Error} When the cetificate file doesn't exist
 */
const setCertFile = (certFile) => {
    if (certFile === undefined) {
        throw new Error('Certificate file absolute path is not defined');
    } else {
        if (!fs.existsSync(certFile))
            //console.log("CertFile: ", fs.readFileSync(certFile));
            throw new Error('Certificate file (certFile) doesn\'t exist');
        confStore.certFile = certFile;
    }
};
/**
 * Retrieves the current configured certificate pem file
 * @returns {String} The configured certificate pem file
 */
const getCertFile = () => {
    return confStore.certFile;
};

/**
 * Sets the Qlik Server Pem key certificate location
 * @param {String} certKeyFile Qlik Server Pem key certificate file (filepath)
 * @throws {Error} When the key certificate file path is not defined
 * @throws {Error} When the key certificate file doesn't exist
 */
const setCertKeyFile = (certKeyFile) => {
    if (certKeyFile === undefined) {
        throw new Error('Certificate key file absolute path is not defined');
    } else {
        if (!fs.existsSync(certKeyFile))
            throw new Error('Certificate key file (certFile) doesn\'t exist');
        confStore.certKeyFile = certKeyFile;
    }
};
/**
 * Retrieves the current configured certificate key pem file
 * @returns {String} The configured certificate key pem file
 */
const getCertKeyFile = () => {
    return confStore.certKeyFile;
};

/**
 * Sets the XRF key (16 chars string) to be passed in both querystring
 * and headers of the request.
 * If this parameter is ommitted will be automatically generated with
 * a random string
 * @param {String} xrfKey Key tha will be used to avoid XRF
 * @throws {Error} When the key is specified and it is not 16 chars long
 */
const setXrfKey = (xrfKey) => {
    if (xrfKey === undefined) {
        confStore.xrfKey = keys.generateXrfKey();
    } else {
        if (xrfKey.length != 16)
            throw new Error('The xrfKey has to be 16 characters long');
        confStore.xrfKey = xrfKey;
    }
};
/**
 * Retrieves the current configured XRF Key
 * @returns {String} The configured XRF Key
 */
const getXrfKey = () => {
    return confStore.xrfKey;
};

/**
 * Sets the domain and user for make requests.
 * If this parameter is ommitted will be automatically generated with
 * a random string
 * @param {String} user that will be used to make requests
 */
const setUser = (user) => {
    if (user === undefined) {
        confStore.user = 'UserDirectory=Internal;UserId=sa_repository';
    } else {
        confStore.user = user;
    }
};
/**
 * Retrieves the current configured User
 * @returns {String} The configured User
 */
const getUser = () => {
    return confStore.user;
};

/**
 * Sets the domain and user for make requests.
 * If this parameter is ommitted will be automatically generated with
 * a random string
 * @param {String} userDirectory that will be used to make requests
 */
const setUserDirectory = (userDirectory) => {
    if (userDirectory === undefined) {
        confStore.userDirectory = 'Internal';
    } else {
        confStore.userDirectory = userDirectory;
    }
};
/**
 * Retrieves the current configured User
 * @returns {String} The configured User
 */
const getUserDirectory = () => {
    return confStore.userDirectory;
};

/**
 * Sets the domain and user for make requests.
 * If this parameter is ommitted will be automatically generated with
 * a random string
 * @param {String} userId that will be used to make requests
 */
const setUserId = (userId) => {
    if (userId === undefined) {
        confStore.userId = 'sa_repository';
    } else {
        confStore.userId = userId;
    }
};
/**
 * Retrieves the current configured User
 * @returns {String} The configured User
 */
const getUserId = () => {
    return confStore.userId;
};


module.exports = {
    apply,
    getConfiguration,
    setHost,
    getHost,
    setCertFile,
    getCertFile,
    setCertKeyFile,
    getCertKeyFile,
    setXrfKey,
    getXrfKey,
    setUser,
    getUser,
    setUserDirectory,
    getUserDirectory,
    setUserId,
    getUserId,
}