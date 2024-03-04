### Recall I/O and Storage Layers 
```
High Level (streams)
    |  
Low  Level (file descriptors) 
    | 
 Syscall   (open(), read(), write(), close())
    |
File System 
    | 
I/O Driver  
```
