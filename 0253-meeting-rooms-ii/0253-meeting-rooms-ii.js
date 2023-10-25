/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    
    const startTimes = intervals.map(a => a[0]).sort((a,b) => a-b)
    const endTimes = intervals.map(a => a[1]).sort((a,b) => a-b)
    
    let start =0
    let end = 0
    let meetingRooms = 0
    
    while(start < intervals.length){
        if(startTimes[start] >= endTimes[end]){
            meetingRooms--
            end++
        }
        meetingRooms++
        start++
    }
    
    return meetingRooms
    
};