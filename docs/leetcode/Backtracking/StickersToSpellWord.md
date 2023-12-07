# Stickers to Spell Word 

## Sypnosis 
Minimize the amount of stickers needed to make up the target word. We may have leftover letters 
from the sticker residue. 

## Backtracking Approach [Non-Optimal & TLE] 
The approach is worth mentioning even though this does not pass the `TLE` requirement. 

### Solution Walkthrough
My attempt before looking over the solution was not correct, it loops over each sticker, and optimizes when a sticker isn't relevant anymore over an ongoing specific combination of stickers. 
<details>
<summary> Attempt </summary>

```python 
class Solution:
    def minStickers(self, stickers: List[str], target: str) -> int:
        def relevant(stic, tar):
            for s in stic:
                offset = ord(s) - ord('a')
                if offset in tar and tar[offset] > 0: 
                    return True
            return False
        def reduce_target(stic, tar): 
            for s in stic: 
                offset = ord(s) - ord('a')
                if offset in tar: 
                    tar[offset] -= 1 
            return tar 

        def empty_target(tar):
            for l in tar: 
                if tar[l] > 0: 
                    return False
            return True 
        # minimize the balls needed to put into each specific bin
        # minimize overflowing each bin 

        # for all stickers we choose to pick if there's a relevant bin that needs to be filled in 
        # a sticker combination is invalid if by the end the bins are not filled. 
         

        # first attempt: 
        alp = [0] * 26
        targ = {}  
        for l in target: 
            offset = ord(l) - ord('a')
            if not offset in targ: 
                targ[offset] = 1
            else: 
                targ[offset] += 1 
        
        # avoid redudancy
        # filter out the stickers that are non-relevant 
        # relevance is defined not contributing to filling up any un-filled specified bin 
        # to take - not to take approach 
        
        # relevant_stickers: leftover stickers that is still relevant after 
        # some combination 
        # target: updated target 
        min_count = float('inf')
        def helper(curr_sticker_idx, nonrelevant_stickers, target, count): 
            nonlocal min_count
            
            if curr_sticker_idx == len(stickers) or curr_sticker_idx in nonrelevant_stickers or count >= min_count:
                return 
            curr_sticker = stickers[curr_sticker_idx]
            if relevant(curr_sticker, target):
                count_with_reduced = count + 1
                target_reduced = reduce_target(curr_sticker, target.copy())
                if empty_target(target_reduced):
                    min_count = min(min_count, count_with_reduced)
                    return 
                else: 
                    if not relevant(curr_sticker, target_reduced):
                        nonrelevant_stickers.append(curr_sticker_idx)
                    # take and reduced 
                    helper(curr_sticker_idx, nonrelevant_stickers, target_reduced, count_with_reduced)
                    # take and reduced and move on
                    helper(curr_sticker_idx + 1, nonrelevant_stickers, target_reduced, count_with_reduced)
                    return    
            # move on
            else: 
                helper(curr_sticker_idx + 1, nonrelevant_stickers, target, count)
                return 
            
            return 
        
        
        helper(0,[], targ, 0)
        if min_count == float('inf'):
            return -1 
        return min_count 
```
</details>
<br />
A working backtracking implementation focuses on **each letter** of the target. For a specific target letter, we iterate through each sticker to see if it has this letter, and proceed to go down the branch with a DFS approach. After the DFS, we backtrack by reverting the sticker. 

```python
class Solution:
    def minStickers(self, stickers, target):
        cnt, res, n = collections.Counter(target), [float("inf")], len(target)  
        def dfs(dic, used, i):
            if i == n: res[0] = min(res[0], used)
            elif dic[target[i]] >= cnt[target[i]]: dfs(dic, used, i + 1)
            elif used < res[0] - 1:
                for sticker in stickers:
                    if target[i] in sticker:
                        for s in sticker: dic[s] += 1
                        dfs(dic, used + 1, i + 1)
                        for s in sticker: dic[s] -= 1
        dfs(collections.defaultdict(int), 0, 0)
        return res[0] < float("inf") and res[0] or -1
```

