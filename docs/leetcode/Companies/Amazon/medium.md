# High Frequency Mediums 

## Walkthrough and Solutions


## Plates Between Candles 

### Keynotes 
- `bisect_left` finds the leftmost number greater or equal to searched value, so we just call and get the left index as usual. 
- `bisect_right` finds the rightmost number greather than searched value, this means we always **decrement** by 1 to give the right index.

**array of candles and number of candles in between leftmost and rightmost**
```python 
class Solution:
    def platesBetweenCandles(self, s: str, queries: List[List[int]]) -> List[int]:
        
        candle_indx = []
        for i, l in enumerate(s): 
            if l == '|': 
                candle_indx.append(i) 

        res = []
        for l,r in queries:     
            i = bisect_left(candle_indx, l)
            j = bisect_right(candle_indx, r) - 1
            if i < j  :
                res.append(candle_indx[j]-candle_indx[i]+1-2-(j-i-1))
            else: 
                res.append(0)
        return res
```

## Reorganize String 

### Keynotes 
- From the pigeonhole principle, or something equivalent, we want to add the most frequent letters first to allow other fewer-appeared letters to be in the gap. Then we can just use a max heap, our condition meets if the letters are spaced out in a way that no adjacent letters are the same. 

**Max heap** 
```python 
class Solution:
    def reorganizeString(self, s: str) -> str:
        res = "" 

        # max heap 
        max_heap = []
        my_counter = Counter(s) 

        for letter in my_counter: 
            heappush(max_heap, (-my_counter[letter], letter)) 
        
        while max_heap: 
            count, letter = heappop(max_heap) 
            if not res or res[-1] != letter: 
                res += letter 
                if count <-1: 
                    heappush(max_heap, (count+1, letter)) 
            else :
                if not max_heap: 
                    break 
                dif_count, dif_letter = heappop(max_heap) 
                res += dif_letter 
                heappush(max_heap, (count, letter)) 
                if dif_count <-1: 
                    heappush(max_heap,(dif_count+1, dif_letter)) 
        
        if len(res) != len(s):
            return ""
        return res
```

## Make a string a subsequence using cyclic increments 

### Keynotes 
- Greedy 2 pointers 
- Subsequence-wise it is better to get the cyclic increment whenever possible. 
- The only way for this to be False is if we have looped through string 1 and string 2 is still not looped through yet. 


**Reference** 
```
aaa ab 
^   ^

aaa ab
 ^   ^  CYCLE-ABLE 

aba ab since l2 is finished, we return True 
```

**Greedy 2 pointers** 
```python
class Solution:
    def canMakeSubsequence(self, str1: str, str2: str) -> bool:
        # one operation per index. 

        # abc 
        # ad 
        
        if len(str1) < len(str2):
            return False 

        i1,i2=0,0 
        cycle = lambda x: chr(ord(x) + 1) if x < 'z' else 'a' 
        feasible = lambda x,y : x == y or cycle(x) == y
        while i2 < len(str2): 
            while i1 < len(str1): 
                if feasible(str1[i1], str2[i2]):
                    i2 += 1 
                    i1 += 1 
                    break 
                else: 
                    i1 += 1 
            if i1 == len(str1) and i2 < len(str2): 
                return False 
            elif i2 == len(str2):
                return True 
        return True 
```

## Maximum Subarray Length with Positive Products 

### Keynotes 
- Pairwise comparison DP, initialize base with 0th index 
- If the previous is positive, then if the current num is positive we increment
- If the previous is negative, then we also increment the length 
- Same with the opposite case (logically)

**Pairwise DP with positive and negative array** 
```python
class Solution:
    def getMaxLen(self, nums: List[int]) -> int:
        dp = []
        dp.append([0]*len(nums)) #positive tracker 
        dp.append([0]*len(nums)) #negative tracker 

        ans = 0

        dp[0][0] = 1 if nums[0] > 0 else 0 
        dp[1][0] = 1 if nums[0] < 0 else 0 
        ans = max(ans, dp[0][0])
        for i in range(1, len(nums)): 
            if nums[i] > 0: 
                dp[0][i] = dp[0][i-1] + 1 
                dp[1][i] = dp[1][i-1] + 1 if dp[1][i-1] > 0 else 0 
            if nums[i] < 0:
                dp[0][i] = dp[1][i-1] + 1 if dp[1][i-1] > 0 else 0 
                dp[1][i] = dp[0][i-1] + 1 
            ans= max(ans, dp[0][i])
        return ans 

```

## Maximum Product Subarray

### Keynotes 
- Pairwise DP, initialize base with 0th index
- If the current is positive, the max is the current number, positive of the previous multiplying with this.
- If the current is negative, the min is the current number, negative of the previous multiplying with this. 

**Utilizing max and min to skip if conditions and returning max of the positive maximum dp array** 
```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        # dp[0][i] represents maximum for i elements
        # dp[1][i] represents minimum for i elements 
        dp = [[0 for j in range(len(nums))] for i in range(2)]
        
        # think conceptually what this means for base case
        dp[0][0] = nums[0]
        dp[1][0] = nums[0]
        
        # recurrence 
        for i in range(1,len(nums)): 
            dp[0][i] = max(dp[0][i-1] *nums[i], dp[1][i-1]*nums[i],nums[i])
            dp[1][i] = min(dp[0][i-1] *nums[i], dp[1][i-1]*nums[i],nums[i])
        return max(dp[0][:])
```