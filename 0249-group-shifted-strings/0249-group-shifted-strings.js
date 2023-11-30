/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    const map = {}
    for(let i = 0; i < strings.length; i++){
        const hash = getHash(strings[i])
        if(hash in map){
            map[hash].push(strings[i])
        }else{
            map[hash] = [strings[i]]
        }
    }
    return Object.values(map)
};

const getHash = string => {
    let result = []
    for(let i = 1; i < string.length; i++){
        const char = (string[i].charCodeAt() - string[i-1].charCodeAt() +26) % 26
        result.push(char)
    }
    return result.join('#')
}