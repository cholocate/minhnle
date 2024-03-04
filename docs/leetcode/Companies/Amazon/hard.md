 # High Frequency Hards 

## Walkthrough and Solutions

## Substring with Largest Variance

### Prerequisite
Kadane's Algorithm with Maximum Subarray 

### Keynotes
- Pairwise comparision with +1, -1 value represetation 
- Modified Kadane's

**Brute Force** 
- Runtime: `O(26 C 2 N^2)` (where max_subarray dominates with `O(N^2)`)

```python 
def max_subarray(arr): 
    # assume arr convered to binary representation with relative order
    # of the pair. (1s and -1s) 

    if len(arr) <= 1: 
        return -1 
    global_max = 0
    for i in range(len(arr)):
        current_subarray = 0
        for j in range(i, len(arr)):
            current_subarray += arr[j]
            if len(set(arr[i:j+1])) == 2: 
                global_max = max(global_max, abs(current_subarray))
    return global_max
```

**Weird Kadane's** 




- keep track of the position of `b` 
    - if there is a `b` at the start of the substring and there's another `b` that we have just encountered.
    - if there are more `b` than `a`. 

- Master Condition: To be valid, the current consider substring has to have at least one b and the ongoing local max is at least 1 (this means there is at least one b and 2 a's)
    - if the subsequent letter is a b, and our current substring started with a b, shift right. `[baa]b -> [aab]` 
    - if we currently have more b's than a's, there's no point in continuing at the substring, restart the substring with the most recent b. `[aabb]b -> aabb[b]` 
        - subtlety in `<=` inequality: `[b]b -> b[b]` and not `[bb]`
        - if the our running sum is 0, we know that it's going to be -1 next, so let's just restart the substring at -1. 
    - otherwise our local max is still valid `[aabb] -> [aabb]`


Reference Picture: 
```
abbabaaba <-> [1 -1 -1 1 -1 1 1 -1 1]

[a]
[ab] has_b = True 
ab[b] first_b = True 
ab[ba] 
abb[ab] first_b = False  
abb[aba] max = 1 
abb[abaa] max = 2
abba[abaab] 
abba[abaaba] 
```

```python 
def max_subarray(one, negone): 
    has_b = False 
    first_b = False
    global_max = 0 
    running_max = 0 
    for c in s:
        if c == one: 
            running_max += 1 
        elif c == negone: 
            has_b = True 

            # baab -> aab
            if first_b and running_max >= 0: 
                first_b = False 
            # aabbb -> b 
            elif local_max <= 0: 
                running_max = -1
                first_b = True 
            # aab -> aab 
            else: 
                running_max -= 1

        if has_b and running_max > global_max:
            global_max = running_max

    return global_max 
```

## Critical Connections in a Network 
### Prerequisites 
DFS in undirected graphs 


### Keynotes
- Critical edges are ones with that does not belong to a cycle 
- We **can** use cycle detection and delete all cycle edges in our results, but this is an overkill. 
- A cycle occurs if there is an backedge, which leads to a node being visited twice within a dfs traversal. 
- Then for any nodes that does not belong to a cycle, it is a critical connection. 


**DFS with parent tracker and timestamp array** 

```
Reference
   2 - 6             8 
  /     \           / \        
1        5 - [0] - 7 - 9 
  \     /
   3 - 4 

   2 - 6             8 
  /     \   time 0  / \        
1        5 - [0] - 7 - 9 
  \     /
   3 - 4 

 [2] - [6]           8           [5] time = 1   [1] time = 4
  /     \           / \          [4] time = 2   [2] time = 5
[1]     [5] - 0 -  7 - 9         [3] time = 3   [6] time = 6 
  \     /
 [3] - [4] 


SINCE 6 goes to 5, and time[5] = 1 
(by stack frame order, where we travelled clockwise from 5) 
-> time[6] = 1
-> time[2] = 1
-> time[1] = 1
-> time[3] = 1
-> time[4] = 1

time @ [0] is 0 and 0 < 1 therefore [5,0] is critical 
note that we do not dfs to 5 again from 6 as we have detected a cycle. 

Similar [7] = 1 [8] = 2 [9] = 3
since 9 can go to 7 
[9] = 1 then [8] = 1 

again time @[0] is 0 and 0 < 1 then [0, 7] is critical. 
```

```python 
class Solution:
    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:
        # DFS from one source 
        # Bridge Detection with in-cycle check 
        # if a node has traversible neighbors, then if the edge from 
        # node to neighbor 
        adj_list = defaultdict(set)
        result = []
        visited=set()
        timestamp = [0] * n
        for u,v in connections: 
            adj_list[u].add(v) 
            adj_list[v].add(u) 
            
        def dfs(time, curr, parent): 
            visited.add(curr) 
            timestamp[curr] = time
            for neighbor in adj_list[curr]: 
                if neighbor == parent: 
                    continue 
                elif neighbor not in visited: 
                    dfs(time+1, neighbor, curr)
                    
                if time < timestamp[neighbor]: 
                    result.append([curr, neighbor]) 
                else: 
                    timestamp[curr] = min(timestamp[curr], timestamp[neighbor]) 
        dfs(0,0,-1) 
        return result
```

## Number of Ways to Reorder Array To Get Same BST 

### Prequisites 
Binomial Theorem for Permutations 

### Keynotes 
- A BST is always the same if the insertion of the nodes in the left subtree and the right subtree has the same relative order to that subtree. 
```
[4,[1],5,[2],[3]] <=> [4,5,[1],[2],[3]] <=> [4,[1],[2],5,[3]] <=> [4,[1],[2],[3],5] 

Note the ordering of the left subtree (1,2,3) and right subtree (5), in this case, the left and the right subtree is always inserted after the root
```
- Using recursion and a little bit of math, we can figure out the total number of insertion permutations. 
    - Recurse on each subtree, the earliest insertion (0th index of the current array partition) is going to be its root. 
    - For each subtree, the number of permutations is calculated as follows: $Perm = \binom{P}{C}$ where $P$ denotes the number of elements in the array, $C$ represents the number of elements in the left/right subtree. 
    - The base case is when the length of the array at the moment is less than 3. This means there is only one way to insert. 

**Recurse on subtrees and count permutations in the current array**
```python 
class Solution:
    def numOfWays(self, nums: List[int]) -> int:
        # binomial ordering 

        factorials = defaultdict(int)
        factorials[0] = 1
        factorials[1] = 1 
        factorials[2] = 2
        def factorial(n): 
            if n in factorials:
                return factorials[n] 
            factorials[n] = n * factorial(n-1) 
            return factorials[n] 

        def choose(p,c): 
            return factorial(p) // (factorial(p-c) * factorial(c)) 

        def recurse(m): 
            if len(m) < 3: 
                return 1 

            left_subtree = [a for a in m[1:] if a < m[0]] 
            right_subtree = [b for b in m[1:] if b > m[0]] 

            return recurse(left_subtree) * recurse(right_subtree) * choose(len(m)-1, len(left_subtree))
        
        return recurse(nums) % (10 ** 9 + 7) - 1 # original perm doesnt count

```

## Length of the Longest Valid Substring 



**Left + Right + k pointer**
*TODO*
- Left goes from is leftmost, we want to start left at the rightmost index of the string. 
- Similar to subarray considerations, we have a left and a right pointer. 
    - Not similar to subarrays, we fix the right pointer until we meet a forbidden string. Then we update right, to the index of k (our running right pointer) to 

### Reference 
```
forbid = aaa, str = cbaaa, expected result: cbaa

cbaa[a] -> 1 
    [a]

cba[aa]
   [a]
   [aa] -> 2

cb[aaa] 
  [a]
  [aa] 
  [aaa] X  

c[baa]a
 [b]
 [ba] 
 [baa]  -> 3

[cbaa] 
[c]
[cb]
[cba]
[cbaa]  -> 4
```

```c
class Solution {
public:
    int longestValidSubstring(string word, vector<string>& forbidden) {
        unordered_set<string> forbid(forbidden.begin(), forbidden.end());
        // create trie structure, and every time there is a potentially forbidden on going substring, 
        // I halt the max count and increment the 3rd pointer instead which acts as a forseeer 
        // of one of the forbidden words 

        // if ongoing run turns out to be forbidden, shift left to be right after right pointer, and right pointer to be one ahead left 
        // else calculate max of entire valid substring so far 

        // if amz were to ask this i dont imagine that implementation would be used. 
        int m = 0; 
        int right = word.size()-1; 

        for (int i = word.size() - 1; i >= 0; --i) {
            // subtle optimization (min(i+10, right+1)) 
            for (int k = i; k < min(i+10, right+1); k++) { 
                string cur = string(&word[i], &word[k+1]); 
                if (forbid.count(cur) != 0) { 
                    right = k-1; 
                    break; 
                }
            }
            m = max(m, right - i+1) ;
        }
        return m; 
    }
};
```

## Russian Doll Envelopes 

### Keynotes for DP and DFS (TLE for LC)
- Can update with DFS and DP (TLE for LC) 
- A node (envelope) is traversible if (depending on how you setup) the current envelope is bigger than the envelope being considered. 

**Dynammic Programming with DFS**
```python
class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:

        adj_list=defaultdict(list) 
        visited=[0] * len(envelopes) 
        dp = [1] * len(envelopes) 
        for i,envi in enumerate(envelopes): 
            for j,envj in enumerate(envelopes): 
                if i == j:
                    continue 
                hi, wi = envi 
                hj, wj = envj 
                if hi > hj and wi > wj: 
                    adj_list[i].append(j) 
        def dfs(curr): 
            
            visited[curr] = True 

            for neighbor in adj_list[curr]: 
                if not visited[neighbor]: 
                    dfs(neighbor) 
                dp[curr] = max(dp[curr], dp[neighbor] + 1) 

        for i in range(len(envelopes)): 
            if not visited[i]:
                dfs(i) 
    
        return max(dp) 
```

### Keynotes for Reduced Dimensionality and LIS 
- Compress one dimension by sorting, break ties (if an envelope has the same height, by **decreasing** height). 
    - Why does sorting help? In the process of traversing through the nodes, we already try to do this with 2 dimensions that are both smaller/larger. 
    - After sorting, since the logic is still consistent (in that we will now be looking for increasing height (if width is chosen to be sorted)), we can essentially reduce into LIS. 
    - Sorting by decrementing height makes sense, you don't want to count the same width twice (imagine [1 1] and [1 2]), if we only look at height and go 1 -> 2, then this is invalid. 

- Avoid subtlety with the actual LIS implementation: that is creating an LIS array to preserve the order for intuition. The LIS implementation below works but only serves to find the numeric result of LIS and not the actual proper LIS.  


**Reference for Binary Search LIS** 
```
5 1 9 8 4 3 5 6   [5]
^
5 1 9 8 4 3 5 6   [1]
  ^
5 1 9 8 4 3 5 6   [1 9]
    ^
5 1 9 8 4 3 5 6   [1 8]
      ^
5 1 9 8 4 3 5 6   [1 4]
        ^
5 1 9 8 4 3 5 6   [1 3] 
          ^
5 1 9 8 4 3 5 6   [1 3 5]
            ^
5 1 9 8 4 3 5 6   [1 3 5 6]
              ^

As you can see, the case below works for numeric answer but not the actual.  

1 8 9 7           [1]
^ 
1 8 9 7           [1 8] 
  ^ 
1 8 9 7           [1 8 9]
    ^
1 8 9 7           [1 7 9]
      ^
```
**Binary Search LIS and Sort by 1 Dimension**

```python
from functools import cmp_to_key

class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        def custom_comparator(item1, item2): 
            if item1[0] == item2[0]: 
                if item1[1] < item2[1]: 
                    return 1 
                return -1 
            if item1[0] < item2[0]:
                return -1
            return 1 
        
        envelopes = sorted(envelopes, key=cmp_to_key(custom_comparator)) 
        print(envelopes)

        res = []
        for i, env in enumerate(envelopes): 
            w,h =env 
            
            if not res or res[-1] < h: 
                res.append(h)
            else: 
                res[bisect_left(res, h)] = h  

        return len(res)
```

## Trapping Rain Water

### Keynotes 
- As long as the wall on the **opposite** side is the tallest, we can ensure that the water on ourside is trappable. 

```python 

class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        left_idx, right_idx = 0, n-1
        res = 0
        left_max, right_max = height[left_idx], height[right_idx]
        while left_idx < right_idx: 
            left_max = max(left_max, height[left_idx]) 
            right_max = max(right_max, height[right_idx])
            if right_max >= left_max: 
                res += left_max - height[left_idx] 
                left_idx += 1 
            else:
                res += right_max - height[right_idx] 
                right_idx -= 1 
        return res  
```

