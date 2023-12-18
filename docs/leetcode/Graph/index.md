# Graph Cheat Sheet

## Key notes
- `visited` array is a crucial, you need to know when it is visited only once versus multiple times. (Multiple times basically means backtracking this array) 


### [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
- Bidirectional DFS 
```python
class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        res = []
        m, n = len(heights), len(heights[0])
        atl = set()
        pac = set()
        visited = [[False] * n for _ in range(m)]  # Initialize visited array
        
        def dfs(r, c, from_ocean):
            if visited[r][c] or (r,c) in from_ocean:  # Skip already visited cells
                return
            visited[r][c] = True
            from_ocean.add((r, c))
            
            for dy, dx in [(r - 1, c), (r, c - 1), (r + 1, c), (r, c + 1)]:
                if (
                    dy >= 0
                    and dy < m
                    and dx >= 0
                    and dx < n
                    and not visited[dy][dx]
                    and heights[dy][dx] >= heights[r][c]
                ):
                    dfs(dy, dx, from_ocean)
            visited[r][c] = False
        for i in range(n):
            dfs(0, i, pac)
            dfs(m - 1, i, atl)

        for i in range(m):
            dfs(i, 0, pac)
            dfs(i, n - 1, atl)

        for enc_pac in pac:
            if enc_pac in atl:
                res.append([enc_pac[0], enc_pac[1]])
        
        return res

```

### [Course Schedule](https://leetcode.com/problems/course-schedule/)
- DFS with cycle detection 

**Intuition** 

Creating the adjacency list is half of the problem already, you have to construct a graph of your choice (map, matrix, etc.), and then from there you keep track whether a prequisite has been seen when you are travelling through a prequisite path. If no cycle (previous prequisite) is detected, then we can finish the list of classes in some order. 

**Observation** 

Note that for a typical DFS traversal, we do not revisit a node once we have traversed through all the paths starting from that node (at least if we are not doing backtracking). Then for any remaining paths that has a traversed node as a prequisite, we can skip this repeated traversal (the node leading to the traversed node does not matter). We can either pop from the adjacency list the actual traversed node, or just create an additional $O(V)$ memory array `checked`, which doesn't really matter in the long term.  

```python 
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        visited = [False for _ in range(numCourses)]
        checked = [False for _ in range(numCourses)]
        adj_list = defaultdict(set) 

        for prereq in prerequisites: 
            a, b = prereq 
            adj_list[a].add(b)

        def dfs(course):
            if visited[course]:
                return False 
            visited[course]=True
            for prereq in adj_list[course]: 
                if not checked[prereq] and not dfs(prereq): 
                    return False 
            visited[course]=False
            checked[course] = True 
            return True 
        

        # if a course is visited and that course passes, we want to skip traversing this course 
        return all(dfs(c) for c in range(numCourses))
```


### [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
- DFS Postorder Traversal 
- Shortest Feasible Path + Eulerian Path Constraint (runtime-wise)

**Reminder** 

In an actual interview or first solving any problem, you should always get a working solution first. 

The natural approach to a path finding problem, is backtracking. Since we have multiple edges, we can pop and insert the edges as needed. However, because of the nature of the question, the approach would run into TLE, so this approach is irrelevant. 

To efficiently solve this question, we need to consider how this problem is constructed: 
- We are guanranteed a solution that uses all edges once and only once, there are multiple solutions to this problem but we choose the one that has the smallest lexicalgraphic order. 
    - Then this problem is analogous to finding an Eulerian path, that finds a path that uses all edges in a graph only once. 

Since we are guaranteed a solution, backtracking **all** path is not necessary, and might give trouble to some (like me) who's always programmed to backtrack everything possible if a problem has backtracking in it. But we only backtrack once we have reached a point: 
- An eulerian path always have an end point, be it the same vertex as the source (that means every vertex is even-degree, since we would have cycles all the way as we traverse), or other vertices (then there is exactly two odd-degree vertices, the start and the end) 

**Intuition**

In an eulerian-path feasible graph, imagine that there could be multiple instances of cycles but there is at most one instance of a non-cyclic path. We do not know whether or not our algorithm will visit the non-cyclic path or through the cycles first, but we do know that **we backtrack once we have reached the end point**, and the end point is the first instance where no more edges could be traversible within the current node. 

**Observation**

- There is one ending point, either the starting point (a graph with zero or more cycles) or a vertex at the end of a non-cyclic path (a graph wih zero or more cycles, with an additional path). The first time we stop, that is when there's no more adjacent node to visit in the current node, we will have reached the ending point. 
- The ending point could be reached while there are still other cycles to visit, but note that **other vertices ends when there's no more path starting from that vertex to visit**. 

**Solution** 

Based on what we justified above, a now natural approach is postorder DFS.
- For each node, simply greedily DFS through all next least lexicographical node that is adjacent, truncate that edge at the same time. 
    - Repeat until the ending point is detected. Add this ending point to result. 
    - As we close up the stack frame, we will decrease lexical orderig, until the beginning of the our recursion which starts at `src` 
    - Then we can return `res` in reverse ordering. 

```python
class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        res =[]
        adj_list = defaultdict(list)
        tickets.sort()
        for src, dst in tickets: 
            adj_list[src].append(dst) 
        
        def dfs_postorder(count, src): 

            while adj_list[src]: 
                des = adj_list[src].pop(0)
                dfs_postorder(count+1, des)
            res.append(src) 

        bfs(0, 'JFK')                  
        return res[::-1]
```

### [Alien Dictionary](vhttps://leetcode.com/problems/alien-dictionary/) 

- Topological Sorting 
- Cycle Detection


```python
class Solution:
    def alienOrder(self, words: List[str]) -> str:
        stack=[] 
        visited = defaultdict(bool) 
        unique=set()
        adj_list = defaultdict(set)
        is_prefix = lambda x, y: x[:min(len(x),(len(y)))] == y[:min(len(x),(len(y)))] and len(x) > len(y) 
        res = ""
        for word in words: 
            for c in word: 
                unique.add(c) 
            

        for i in range(1, len(words)): 
            w1 = list(words[i-1]) 
            w2 = list(words[i])
            if is_prefix(w1,w2): 
                return res
            while w1 and w2: 
                c1 = w1.pop(0) 
                c2 = w2.pop(0) 
                if c1 != c2: 
                    adj_list[c1].add(c2) 
                    break
            
        def dfs(u) : 
            # ensuring stack does not append excessively 
            if visited[u]:
                return True
            visited[u] = True 
            if u in adj_list: 
                for v in adj_list[u]: 
                    if dfs(v): 
                        return True
            # ambiguous 
            if u not in stack: 
                stack.append(u) 
            visited[u] = False 

        
        for u in unique: 
            if not visited[u]: 
                if dfs(u):
                    return res
        
        while stack: 
            res += stack.pop() 
        for u in unique: 
            if u not in visited:
                res += u 
        return res 
```