# Graph Cheat Sheet

## Key notes
- `visited` array is a crucial, you need to know when it is visited only once versus multiple times. (Multiple times basically means backtracking this array) 


[Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
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

[Course Schedule](https://leetcode.com/problems/course-schedule/)

