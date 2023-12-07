# Bellman Ford 
### Cheatsheet 
- **Detect negative cycles** by exploiting the fact that after $N-1$ iteration, all paths have been traversed and we have reached found out the optimum path value from `src` to `dst`. If any value continues to updated after $N-1 $ iteration, we know that there is a negative cycle because a path is at most N-1 edges long, if a path's value is updated within this iteration, we must have traversed some cycle with negative edges. 
- Bellman-ford is $O(V*E)$ 


### Intuition
- Level by level traversal (BFS)
- The goal here is looking over all edges over an $N-1$ iteration scheme, to update vertices only if in the previous iteration it has been reached (`dist != inf`).
- Each iteration, we simply look at the edges from `u` to `v` and update if the `w` of that edge affects our path costs so far. 
- An $N-1$ iteration scheme guarantees traversing through all paths, hence minimizing or maximizing the cost. 
- An extra iteration, `Nth` is added to detect cycles for negative edges, this is because TODO 

### Applications 
- Negative cycle detections 
    - Network flow 

### Template 
Depending on the question, we might need to change the template algorithm a little bit. 
```
dist[src] = 0 
for u,v,w in edges : 
    if dist[u] != inf && dist[u] + w < dist[v]: 
        dist[v] = dist[u]+w
return dist[dest] 

```

