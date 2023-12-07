# Disjoint Set 

### Applications 

### Template
```
initialize all nodes rank to 1 
initialize all nodes parent to itself 


func find(node): Finds the parent of the given node 
    if parent[node] != node:
        # path compression with caching assignment
        parent[node] = find(parent(node)) 
    return parent[node] 

func union(node1, node2):
    n1_par=find(node1) 
    n2_par=find(node2) 

    if n1_par == n2_par: 
        return 
    
    if rank[n1_par] > rank[n2_par]: 
        parent[n2_par] = n1_par
    elif rank[n1_par] < rank[n2_par]: 
        parent[n1_par] = n2_par
    else: 
        # either union is fine 
        parent[n1_par] = n2_par 
        rank[n2_par] += 1 
```
**Notes** 
- Rank, or the height does not increase, if an unequal rank union is taking place. 

