class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        multiple_dict = {}
        for i in range(1, 17):
            multiple_dict[60*i] = 1
        result = 0
        seen_dict = {}
        for each in time:
            for k,_ in multiple_dict.items():
                val = k-each
                if val>0 and val in seen_dict:
                    result+=seen_dict[val]
            seen_dict[each] = seen_dict.get(each,0)+1
        return result
            
        
        
