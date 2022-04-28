/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const dbMap = new Map()
const alphaNumeric = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];

const getCode = () => {
    let code = new Array(6).fill(0)
    
    code = code.map(() => alphaNumeric[Math.floor(Math.random() * alphaNumeric.length)]).join('')
    return code
}
var encode = function(longUrl) {
    let code = getCode()
    while(dbMap.has(code)) code = getCode()

    dbMap.set(code, longUrl)
    return `http://tinyurl.com/${code}`
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const code = shortUrl?.replace('http://tinyurl.com/', "")
    return dbMap.get(code)
    
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */