/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const map = {}
    
    for (const path of paths){
        const folder = path.split(" ")
        const dir = folder[0]
        for( let i =1; i < folder.length; i++){
            const file = folder[i]
            const fileNameStr = file.split("(")
            const content = fileNameStr[1].slice(0, -1)
            const arr = map[content] || []
            map[content] = [...arr, `${dir}/${fileNameStr[0]}`]
        }
    }
    
    const result = []
    Object.values(map).forEach((val) => {
        if(val.length > 1){
            result.push(val)
        }
    })
    
    return result;
};