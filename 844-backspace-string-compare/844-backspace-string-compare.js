/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
   let i = s.length -1 
   let j = t.length - 1
   let s_skips = 0
   let t_skips = 0
   
   while(i >= 0 || j >= 0){
       while( i >= 0){
           if(s[i] === '#'){
               s_skips++
               i--
           }else if( s_skips > 0){
               s_skips--
               i--
           }else break
       }
       
       while( j >= 0){
           if(t[j] === '#'){
               t_skips++
               j--
           }else if( t_skips > 0){
               t_skips--
               j--
           }else break
       }
       
       if(i >= 0 && j >= 0 && s[i] !== t[j]) return false
        
       
       if((i >=0 && j < 0) || (j >= 0 && i < 0)) return false
       
       i--
       j--
       
   }
   return true
};
