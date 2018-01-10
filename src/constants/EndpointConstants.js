const HTTP = 'http://';
const COLON = ':';
const IP_NENO = '10.28.105.80';
const PORT_NENO = '8082';
const IP_LOCAL = '127.0.0.1'

export const ROOT_NENO = HTTP+IP_LOCAL+COLON+PORT_NENO;

export const NENO_SERVICE_HASH_TEST = `${ROOT_NENO}/redis/hash/test`
export const NENO_SERVICE_HASH_PUSH = `${ROOT_NENO}/redis/hash/push`
export const NENO_SERVICE_HASH_GET_WITH_KEY = `${ROOT_NENO}/redis/hash/get?key={key}`
export const NENO_SERVICE_HASH_GETS = `${ROOT_NENO}/redis/hash/gets`

