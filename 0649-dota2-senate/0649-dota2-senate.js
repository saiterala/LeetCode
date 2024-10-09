/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let rCount=0, dCount=0;
    
    let dFloatingBan=0, rFloatingBan = 0;
    
    let queue = []
    
    for(const s of senate){
        queue.push(s)
        if(s === 'R') rCount++
        else dCount++
    }
   
    
    while(rCount > 0 && dCount > 0){
        const curr = queue.shift();
        
        if(curr === 'R'){
            if(rFloatingBan > 0){
                rFloatingBan--
                rCount--
            }else{
                dFloatingBan++
                queue.push('R')
            }
        }else{
             if(dFloatingBan > 0){
                dFloatingBan--
                dCount--
            }else{
                rFloatingBan++
                queue.push('D')
            }
        }
    }
    
    return rCount > 0 ? 'Radiant' : 'Dire'
};