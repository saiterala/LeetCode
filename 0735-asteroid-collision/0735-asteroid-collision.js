/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const result = [];
    
    for(const asteroid of asteroids){
        if(asteroid > 0){
            result.push(asteroid);
            continue;
        }
        console.log(result)
        while(true){
            const len = result.length;
            if(len === 0 || result[len-1] < 0){
                result.push(asteroid);
                break;
            }
            const asteroidSize = Math.abs(asteroid)
            
            if(result[len-1] === asteroidSize){
                result.pop()
                break;
            }
            if(result[len-1] > asteroidSize){     
                break;
            }
            result.pop()
        }
    }
    
    return result;
    
    
};