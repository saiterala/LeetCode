/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    const len1 = str1.length
    const len2 = str2.length
    let pointer1 = 0
    let counter = 0

    for (let j =0; j < len2; j++){

        const orgChar = str2[j];
        let newChar = str2

        if(orgChar === "a"){
            newChar = "z"
        }else{
            newChar = String.fromCharCode(orgChar.charCodeAt() - 1)
        }

        while (pointer1 < len1){
            if(str1[pointer1] === newChar || str1[pointer1] === orgChar){
                counter++
                pointer1++
                break;
            }else{
                pointer1++
            }
        }
    }

    console.log(counter)

    return counter === len2
};