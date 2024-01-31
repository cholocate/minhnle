# Dijkstra's Algorithm 

### Key Takeaways
- Similar to how BFS works, for a graph without terminiating conditions, Dijsktra computes the shortest path from `source` to every other node in `G`. 
- Make sure to make a distinction betwween directed and undirected graph when constructing the `adjacency` matrix or map. 


### Intuition 
- Generate shortest spanning tree (greedily takes all nodes with a BFS approach (from source)) 
- Let $SPS$ be shortest spanning set 
   - For any $V \notin SPS$, if the distance from `src` to $V$ is calculated, find the minimum distance from `src` to $V$ and update its adjacent nodes. 
- End the algorithm when $SPS$ is generated sucessfully or when we detect disconnection. 

### Template 
```
initialize array of distance dist to be inf 
initialize priority queue pq 

dist[src] = 0 
push {0, src} to pq (sort by first element)

while pq : 
    dist, curr = pop pq 
    for adj node from curr: 
        if dist[curr] + weight(u,v) < dist[v]: 
            dist[v] = dist[curr] + weight(u,v) 
            push {dist[v], v} to pq  

return dist 
```

