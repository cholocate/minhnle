# Backtracking Cheat Sheet

### Template 
For the pupose of pattern-matching and better identification, refer to the this [template](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2793/) and the template below. 

```python
def backtrack(candidates):
    result=[]
    sub_result=[] 
    def helper(temp, idx): 
        if idx == len(candidates) or cond(temp): 
            result.append(sub_result.copy())
            return 
        for i in range(idx, len(candidates)): 
            if sub_cond(temp, candidates[i]): 
                sub_result.append(candidates[i]) 
                helper(update(temp, candidates[i]), i)
                sub_result.pop() 
    helper(0,0) 
    return result  
```

Intergrate the template and the problem together and create your own template. Sometimes, some section of the template will follow naturally but sometimes it doesn't. 

Often times you need to consider
- Whether you need to sort the array before solving, depending on the language, you might need to copy the sub result before you change it (Python). 
- Whether duplicates are allowed, in this case we can use `Counter` from Python or anything equivalent. Encode the problem so that you can account for symmetry when you work on your algorithm. Duplicates can also be handled differently without `Counter` if the problem permits, see `Subsets II ` breakdown below. 
- Additional optimization that reduces backtracking runtime, runtime of this type of problem is often `O(bruteforce)`. See ` WordSearch ` breakdown below. 

### [Subsets II](https://leetcode.com/problems/subsets-ii/description/)
- Duplicate Consideration 
- Size of sub result varies 

**Template Implementation**
- Take the duplication or skip to the next unique candidate. 
- Our recursive implementation then takes in the index that we have decided next, see point `A` 
```python 
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:

        nums = sorted(nums)
        res,subset = [],[] 
        n = len(nums)
        def helper(idx): 
            res.append(subset.copy())
            for i in range(idx, n):
                if i == idx or nums[i] != nums[i-1]: #A
                    subset.append(nums[i])
                    helper(i+1)
                    subset.pop()
        helper(0)
        return res        
```
- Here we takes care of the duplicate problem by simply detecting whether this is a continued recursion of the duplicate recursion or moving on to the next unique candidate. 

**Intuitive Implementation**

We can also not rely on the template and make use of our own intuition, just like before, we choose the duplicate route or take the unique candidate. 
```python
from bisect import bisect_right

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:

        nums = sorted(nums)
        res,subset = [],[] 
        n = len(nums)
        def helper(i): 
            if i >= n: 
                res.append(subset.copy())
                return
            subset.append(nums[i]) 
            helper(i+1)
            subset.pop()
            helper(bisect_right(nums, nums[i]))
        helper(0)
        return res 
```
Here we use `bisect_right` to find the index of the next unique candidate, we didn't need to loop through and simply translate our implementation to full recursion. 

### [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/description/)
- Duplicate Consideration
- Runtime Consideration

This is a classical instance where `Counter` is extremely useful, as we can encode the problem into a simple backtracking question rather than having find some fancy ways to check for exisiting duplicated sub result. 

- Loop through the `Counter` instead of the `candidates` array. To loop through, we can just reformat the `Counter` using list comprehension. 
- Pass in remaining sum for each recursion instance. 
```python
from collections import Counter
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        cand_counter = Counter(candidates) 
        res = [] 
        part = [] 
        n = len(candidates)
        m = len(cand_counter)
        cand_counter = [[c, cand_counter[c]] for c in cand_counter]
        
        # backtrack over counter instead. 
        def helper(counter_idx, rem): 
            if counter_idx > m or rem < 0 :
                return 
            elif rem == 0: 
                print(cand_counter)
                res.append(part.copy())
                return 
            for i in range(counter_idx, m): 
                cand, cnt = cand_counter[i] 
                if cnt <= 0:
                    continue 
                if rem - cand >= 0: 
                    part.append(cand) 
                    cand_counter[i][1] -= 1
                    helper(i, rem - cand) 
                    cand_counter[i][1] += 1 
                    part.pop()
        helper(0, target)
        return res
```
- See how we backtrack both `part` and `cand_counter` for each recursion. 
- This eliminates the symmetric problem, since `Counter` is already grouping up all instances of candidate duplication. The problem becomes "What are all the possible combinations given that I have picked 2 number 1's  (generic)  to get to the target" rather than index specification. 

### [Word Search](https://leetcode.com/problems/word-search/)
- Runtime consideration
- Backtracking problem masked as simple BFS/DFS 

We may have to visit a cell *multiple* times, this calls for backtracking, but backtracking alone is also not enough. 

**The implementation below is not-optimal**, but it is intuitive. 
- DFS alone will mark the cell as `visited` and move on, while backtracking will not do so. This means we can produce exponential runtime if not careful. Then, an optimization that is closely related to `Counter` could save us. 
- visited will mark the cell and unmark the cell after every `dfs` call. 
- The optimization so that we can do the backtracking without any problem is as follows: 
  - Create a custom `Counter` to count all instances of letter appearances and its' frequency on the `board`. 
  - Pre-check whether the board has enough frequency of each letter from `word`, if not return `False` and save the implementation. 
```python 
from collections import defaultdict, Counter

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        visited = set()

        m = len(board)
        n = len(board[0])
        o = len(word)

        # Optimization
        letterCountInBoard = defaultdict(int)
        letterCountInWord = Counter(word)
        for i in range(m):
            for j in range(n): 
                letterCountInBoard[board[i][j]] += 1
        
        for letter in letterCountInWord: 
            if letter not in letterCountInBoard or letterCountInWord[letter] > letterCountInBoard[letter]: 
                return False
        # DFS + Backtracking 
        def dfs(r,c,k): 
            print(k)
            if k == o: 
                return True 
            for dy,dx in {(r+1,c),(r-1,c),(r,c+1),(r,c-1)}:
                rc = str(dy) + str(dx)
                if rc not in visited and dy >= 0 and dy < m and dx >= 0 and dx < n and board[dy][dx] == word[k]: 
                    visited.add(rc) 
                    if dfs(dy, dx, k+1):
                        return True 
                    visited.remove(rc) 
            return False



        # backtracking 
        # train your mind to think differently 

        for i in range(m):
            for j in range(n): 
                if len(word) == 1 and board[i][j] == word:
                    return True
                rc = str(m) + str(n) # encoding rowcell combo
                if rc not in visited: 
                    visited.add(rc)
                    if dfs(i,j,0):
                        return True
                    visited.remove(rc) 
        return False 
```
- Other than the nature of the problem, this is just another variation of matrix graph traversals. 

### [N-Queens](https://leetcode.com/problems/n-queens/description/)
If you have done all the backtracking problems before-hand and reach here, you should have no problem solving this problem. The `N-Queens` problem is `hard` merely because a lot of people doesn't know that this is a `backtracking` question. 

- Bottom-up building of the board and any additional row we add in, check whether `'Q'` could be placed in by creating a `checker` function, that is checking whether no Queens appear diagonally down left or diagonally down right or horizontally or vertically, relative to the cell. 
- `parse` is merely here because we have to return each board instance as an array of strings instead. 
```python
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        if n == 1: 
            return [['Q']]
        board = [['.' for _ in range(n)] for i in range(n)]
        res = []
        def parse(b): 
            parsed_res = []
            for r in b: 
                row = ""
                for e in r: 
                    row += e
                parsed_res.append(row)
            return parsed_res
        def checker(r,c): 
            # diagonal_so_far 
            # horizontal_so_far 
            # vertical_so_far
            check_r = r-1
            check_c = c-1
            diag_right_c = c + 1
            while check_r >= 0 or check_c >= 0:  
                if diag_right_c < n and board[check_r][diag_right_c] == 'Q':
                    return False
                if check_r >= 0 and check_c >= 0 and board[check_r][check_c] == "Q": 
                    return False 
                
                if check_r >= 0 and board[check_r][c] == "Q":
                    return False
                if check_c >= 0 and board[r][check_c] == 'Q': 
                    return False 
                check_r -=1 
                check_c -=1 
                diag_right_c += 1
            return True 
        def helper(curr_level):
            if curr_level == n: 
                res.append([r[:] for r in board]) 
                return 
            for i in range(n): 
                board[curr_level][i] = 'Q' 
                if checker(curr_level, i): 
                    helper(curr_level+1) 
                board[curr_level][i] = '.'
            return False     
        for i in range(n):
            board[0][i] = 'Q'
            helper(1)
            board[0][i] = '.'

        final_res = []
        for pre_parse in res:
            final_res.append(parse(pre_parse))
        
        return final_res
```
That is all! If you are comfortable with `Backtracking`, you should start doing `Dynammic Programming`! 











